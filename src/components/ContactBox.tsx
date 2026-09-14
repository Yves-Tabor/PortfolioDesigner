import React, { useState } from 'react';
import { Copy, Check, Lock } from 'lucide-react';

interface ContactBoxProps {
  email: string;
}

export const ContactBox: React.FC<ContactBoxProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const [showPgp, setShowPgp] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <div className="contact-box relative group">
        <div className="contact-head">
          <span className="mono">Direct inbox</span>
          <button
            onClick={() => setShowPgp(!showPgp)}
            className="mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
          >
            <Lock size={12} />
            PGP verified
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="contact-email select-all">{email}</div>
          <button
            onClick={handleCopy}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
          </button>
        </div>

        {copied && (
          <div className="text-[11px] text-emerald-400 font-mono mt-1">
            ✓ Copied email address to clipboard
          </div>
        )}

        <div className="contact-sub">
          Response time: usually under 24 hours on business days.
        </div>
      </div>

      {showPgp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-black border border-emerald-500/30 rounded p-6 max-w-md w-full text-white font-mono text-xs">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
              <span className="text-emerald-400 font-bold">----- BEGIN PGP PUBLIC KEY BLOCK -----</span>
              <button onClick={() => setShowPgp(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <p className="text-gray-400 break-all leading-tight text-[10px] mb-4">
              mQENBF9xZ4wBCADa1f0z9K8m... (Fingerprint: 8F2A 4B91 C03D E456 7890 1234 YVES TABOR)
            </p>
            <button
              onClick={() => setShowPgp(false)}
              className="btn btn-outline w-full justify-center text-xs"
            >
              Close Key Window
            </button>
          </div>
        </div>
      )}
    </>
  );
};
