import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  return (
    <div className="w-full bg-stone-50 border-b border-olive/5">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-charcoal leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-olive/80 font-light max-w-lg">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
