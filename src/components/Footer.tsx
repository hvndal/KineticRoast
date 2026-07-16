import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-stack-xl pb-stack-md border-t border-outline/5 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-12">

        <div className="max-w-xs">
          <div className="font-display-xl text-headline-lg text-primary mb-6 tracking-tighter">EMBER</div>
          <p className="font-body-md text-outline">
            A roasting house dedicated to the intersection of thermal science and the human spirit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
          <div className="flex flex-col gap-4">
            <p className="font-label-caps text-primary">COMPANY</p>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Sustainability</Link>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Shipping</Link>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Wholesale</Link>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Careers</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-label-caps text-primary">SOCIAL</p>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Instagram</Link>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Journal</Link>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Twitter</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-label-caps text-primary">LEGAL</p>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Terms</Link>
            <Link className="font-body-md text-outline hover:text-primary transition-colors duration-300" href="#">Privacy</Link>
          </div>
        </div>

      </div>

      <div className="mt-stack-md pt-8 border-t border-outline/5 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-outline">© {new Date().getFullYear()} EMBER COFFEE ROASTERS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <span className="font-label-caps text-primary opacity-50">EST. 2012</span>
          <span className="font-label-caps text-primary opacity-50">ORIGIN: VOLCANIC</span>
        </div>
      </div>
    </footer>
  );
}
