import React, { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-[#FAF6F0]">
      <div className="max-w-2xl mx-auto bg-[#EFE5D8]/70 rounded-3xl p-8 sm:p-12 border border-[#E8DEC8] text-center flex flex-col items-center">
        
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#2C1A11] tracking-tight">
          Fresh news, <br className="sm:hidden" />
          sparingly.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#6E5C52] max-w-md">
          Seasonal hampers, restocks and the occasional recipe. Nothing else.
        </p>

        {subscribed ? (
          <div className="mt-6 p-4 bg-[#FAF6F0] rounded-2xl border border-[#49634C]/30 text-[#49634C] font-medium text-sm">
            ✓ Thank you for subscribing! We will keep you posted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-5 py-3.5 bg-[#FAF6F0] border border-[#E8DEC8] rounded-full text-sm text-[#2C1A11] placeholder-[#7A6248] focus:outline-none focus:ring-2 focus:ring-[#2C1A11]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#2C1A11] hover:bg-[#3D2517] text-[#FAF6F0] font-medium text-sm rounded-full transition-all shadow-md active:scale-[0.98] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
