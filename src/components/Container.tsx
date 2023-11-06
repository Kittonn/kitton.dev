type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="container mx-auto lg:max-w-screen-md p-5">{children}</div>
  );
}
