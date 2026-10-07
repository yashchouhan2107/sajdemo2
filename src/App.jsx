import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Categories } from './components/Categories';
import { ProductCatalog } from './components/ProductCatalog';
import { BrandStory } from './components/BrandStory';
import { ProcessSteps } from './components/ProcessSteps';
import { GiftingSection } from './components/GiftingSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [toastMessage, setToastMessage] = useState('');

  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 'pumpkin-seeds',
      name: 'Pumpkin seeds',
      selectedWeight: '250g',
      price: 249,
      quantity: 1
    }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddToCart = (product, selectedWeight = '250g') => {
    const price = product.prices[selectedWeight];
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.selectedWeight === selectedWeight);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          selectedWeight,
          price,
          quantity: 1
        }];
      }
    });
    showToast(`Added ${product.name} (${selectedWeight}) to bag`);
    setIsCartOpen(true);
  };

  const handleAddHamperToBag = (hamper) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === hamper.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, {
          id: hamper.id,
          name: hamper.name,
          selectedWeight: 'Gift Box',
          price: hamper.price,
          quantity: 1
        }];
      }
    });
    showToast(`Added ${hamper.name} to bag`);
    setIsCartOpen(true);
  };

  const handleOrderInBulk = (hamper) => {
    showToast(`Bulk inquiry requested for ${hamper.name}. We will contact you shortly!`);
  };

  const handleUpdateQuantity = (id, weight, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, weight);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedWeight === weight) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id, weight) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedWeight === weight)));
  };

  const scrollToSection = (targetId) => {
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    scrollToSection('shop');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col justify-between selection:bg-[#3D2517] selection:text-[#FAF6F0] overflow-x-hidden">
      
      {/* Luxury Initial Page Preloader */}
      <Preloader onLoaded={() => setIsLoaded(true)} />

      {/* Top Sticky Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenNav={() => setIsNavOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => showToast('Account login features coming soon!')}
      />

      {/* Main Page Content */}
      <main className="flex-grow w-full overflow-x-hidden">
        <Hero 
          onShopClick={() => scrollToSection('shop')}
          onExploreClick={() => scrollToSection('story')}
        />

        {/* Infinite Scrolling Marquee Banner 1 */}
        <Marquee 
          bgColor="bg-[#2C1A11]"
          textColor="text-[#FAF6F0]"
          items={[
            '100% ORGANIC & FRESH',
            'HAND-PICKED SMALL BATCHES',
            'RESEALABLE ECO POUCHES',
            'NO ADDED PRESERVATIVES',
            'EXPRESS NATIONWIDE SHIPPING',
            'SUSTAINABLE PACKAGING',
            'PREMIUM SINGLE ORIGIN'
          ]}
        />

        <Categories 
          onSelectCategory={handleCategorySelect}
        />

        <ProductCatalog 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAddToCart={handleAddToCart}
        />

        <BrandStory 
          onBestsellersClick={() => handleCategorySelect('Nuts')}
        />

        <ProcessSteps />

        <GiftingSection 
          onAddHamperToBag={handleAddHamperToBag}
          onOrderInBulk={handleOrderInBulk}
        />

        {/* Secondary Marquee Banner 2 */}
        <Marquee 
          bgColor="bg-[#EFE5D8]"
          textColor="text-[#2C1A11]"
          items={[
            'SEASONAL HAMPERS AVAILABLE NOW',
            'FREE DELIVERY OVER ₹999',
            'HAND-WRAPPED WITH CARE',
            'PERFECT FOR FESTIVALS & WEDDINGS',
            'CELEBRATE FRESHNESS DAILY'
          ]}
        />

        <Newsletter />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Drawers & Modals */}
      <NavigationDrawer
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        cartCount={totalCartCount}
        onNavigate={scrollToSection}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          showToast('Redirecting to secure payment checkout...');
          setIsCartOpen(false);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => {
          handleAddToCart(product, '250g');
        }}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2C1A11] text-[#FAF6F0] px-5 py-3 rounded-full shadow-2xl border border-[#C88E52]/40 text-sm font-medium flex items-center gap-2 max-w-[90vw]">
          <span>🌿</span> <span className="truncate">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
