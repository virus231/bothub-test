interface CryptoInfoProps {
  cryptoName: string;
  cryptoIcon: string;
  price: string;
}

const getCryptoIcon = (cryptoName: string, cryptoIcon: string) => {
  const cryptoIconMap: Record<string, string> = {
    Bitcoin: "currency_bitcoin",
    Ethereum: "currency_exchange",
    Dogecoin: "pets",
  };

  if (cryptoIcon) {
    return (
      <img
        src={cryptoIcon}
        alt={cryptoName}
        className="w-full h-full object-contain"
      />
    );
  }

  const fallbackIcon = cryptoIconMap[cryptoName] || "currency_exchange";
  return (
    <span className="material-symbols-outlined text-yellow-500 text-xl">
      {fallbackIcon}
    </span>
  );
};

export const CryptoInfo = ({
  cryptoName,
  cryptoIcon,
  price,
}: CryptoInfoProps) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex-shrink-0">
          {getCryptoIcon(cryptoName, cryptoIcon)}
        </div>
        <span className="text-neutral-50 font-regular text-md">
          {cryptoName}
        </span>

        <span className="text-neutral-white-100 font-regular text-md">
          reached price
        </span>
      </div>

      <div className="text-accent-500 font-medium text-md">{price}</div>
    </div>
  );
};
