export type TFooter = {} & React.ComponentPropsWithoutRef<'footer'>;

const Footer: React.FC<TFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-600 ${className}`}
    >
      <p>Canada</p>
    </footer>
  );
};

export default Footer;
