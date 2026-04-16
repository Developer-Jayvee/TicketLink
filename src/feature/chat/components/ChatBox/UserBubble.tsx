export default function UserBubble() {
  return (
    <div className="relative" id="other-user">
      <p className="mr-16 my-2 font-mono text-right text-gray-500">Jayvee</p>
      <div className="absolute rounded-full overflow-hidden w-10 h-10 right-0">
        <img
          src="https://ui-avatars.com/api/?name=Jayvee+Hidlao"
          className="w-full h-full object-cover"
          alt="Profile Image"
        />
      </div>
      <div className="mr-15 ml-40  bg-blue-100 py-1 border-0 shadow-lg px-5 rounded-2xl ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
        laborum dolores? Nobis, eveniet! Rem minima at quidem culpa tempora vero
        quasi, nostrum, corporis dicta iste voluptatem eveniet suscipit cumque.
        Aliquid! lorem
      </div>
    </div>
  );
}
