import Image from "next/image";

interface DecorationProps {
    className?: string;
    style?: React.CSSProperties;
}

export const CoffeeBranchImage = ({ className, style }: DecorationProps) => (
    <div className={`relative ${className}`} style={style}>
        <Image
            src="/assets/decorations/coffee-branch-vintage.png"
            alt="Vintage coffee branch illustration"
            fill
            className="object-contain mix-blend-multiply opacity-80"
            sizes="(max-width: 768px) 100vw, 500px"
        />
    </div>
);

export const CoffeeBeansScatteredImage = ({ className, style }: DecorationProps) => (
    <div className={`relative ${className}`} style={style}>
        <Image
            src="/assets/decorations/coffee-beans-scattered.png"
            alt="Vintage scattered coffee beans illustration"
            fill
            className="object-contain mix-blend-multiply opacity-60"
            sizes="(max-width: 768px) 100vw, 500px"
        />
    </div>
);

export const CoffeeLeafImage = ({ className, style }: DecorationProps) => (
    <div className={`relative ${className}`} style={style}>
        <Image
            src="/assets/decorations/coffee-leaf-detailed.png"
            alt="Vintage coffee leaf illustration"
            fill
            className="object-contain mix-blend-multiply opacity-70"
            sizes="(max-width: 768px) 100vw, 500px"
        />
    </div>
);
