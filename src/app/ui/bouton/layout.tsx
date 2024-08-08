export default function Boutons({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[#2F3092] rounded-3xl text-white text-3xl py-3 px-6 max-w-max hover:bg-[#EE7601] transition duration-300 ease-in-out">
        {children}
      </section>
    )
}
