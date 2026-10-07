import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ProductPouch } from './ProductVisuals';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const FREE_SHIPPING_LIMIT = 999;
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_LIMIT - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_LIMIT) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#2C1A11]/40 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Cart Container */}
      <div className="relative w-full max-w-md bg-[#FAF6F0] h-full shadow-2xl flex flex-col justify-between z-10">
        
        {/* Cart Header */}
        <div className="p-6 border-b border-[#EFE5D8] flex items-center justify-between bg-[#FAF6F0]">
          <h2 className="font-serif text-3xl font-medium text-[#2C1A11]">
            Your bag
          </h2>
          <button 
            onClick={onClose}
            aria-label="Close bag"
            className="p-2 rounded-full hover:bg-[#EFE5D8] transition-colors text-[#2C1A11]"
          >
            <X className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-[#EFE5D8]/80 px-6 py-3 border-b border-[#E8DEC8]">
          {remainingForFreeShipping > 0 ? (
            <p className="text-xs sm:text-sm text-[#2C1A11] font-medium text-center">
              Add <span className="font-bold text-[#8C5238]">₹{remainingForFreeShipping}</span> more for free delivery
            </p>
          ) : (
            <p className="text-xs sm:text-sm text-[#49634C] font-semibold text-center flex items-center justify-center gap-1">
              <span>✨</span> You have unlocked FREE delivery!
            </p>
          )}
          {/* Progress Bar */}
          <div className="w-full bg-[#E5DAC8] h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-[#8C5238] h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#7A6248] py-12">
              <ShoppingBag className="w-16 h-16 stroke-[1] mb-4 opacity-40" />
              <p className="font-serif text-2xl text-[#2C1A11]">Your bag is empty</p>
              <p className="text-sm mt-1 max-w-xs">
                Explore our collections of nuts, dried fruits, seeds, and gift hampers.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={`${item.id}-${item.selectedWeight}`}
                className="flex items-start gap-4 p-3 bg-white/70 rounded-2xl border border-[#E8DEC8]/60 shadow-sm"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 bg-[#EFE5D8]/60 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center">
                  <ProductPouch 
                    type={item.id.includes('cashew') ? 'cashews' : item.id.includes('date') ? 'dates' : item.id.includes('raisin') ? 'raisins' : item.id.includes('seed') ? 'seeds' : 'almonds'} 
                    title={item.name} 
                    subtitle={item.selectedWeight} 
                    className="scale-90" 
                  />
                </div>

                {/* Info & Controls */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#2C1A11] truncate">
                        {item.name}
                      </h4>
                      <span className="inline-block px-2 py-0.5 bg-[#EFE7DA] text-[#7A6248] text-[11px] font-medium rounded-full mt-0.5">
                        {item.selectedWeight}
                      </span>
                    </div>
                    <span className="font-medium text-sm text-[#2C1A11] ml-2">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity Stepper & Remove */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[#D8CEBE] rounded-full bg-[#FAF6F0] px-2 py-1 gap-3">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedWeight, item.quantity - 1)}
                        className="p-1 text-[#2C1A11] hover:text-[#8C5238] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-semibold text-[#2C1A11] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedWeight, item.quantity + 1)}
                        className="p-1 text-[#2C1A11] hover:text-[#8C5238] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedWeight)}
                      className="text-xs text-[#7A6248] hover:text-[#8C5238] underline transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#EFE5D8] bg-[#FAF6F0] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-normal text-[#2C1A11]">Subtotal</span>
              <span className="font-serif text-2xl font-semibold text-[#2C1A11]">₹{subtotal}</span>
            </div>
            <p className="text-xs text-[#7A6248]">
              Taxes and delivery are calculated at checkout.
            </p>
            <button
              onClick={onCheckout}
              className="w-full py-4 bg-[#2C1A11] text-[#FAF6F0] hover:bg-[#3D2517] font-medium text-base rounded-full shadow-md transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
