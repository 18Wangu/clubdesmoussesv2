export default function Boutons({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="rounded-club-des-mousses py-3 px-6 max-w-max bg-[#2F3092] hover:bg-[#EE7601] transition duration-300 ease-in-out">
        {children}
      </section>
    )
}
