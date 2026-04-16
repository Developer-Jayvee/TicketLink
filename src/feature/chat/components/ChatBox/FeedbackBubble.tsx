export default function FeedbackBubble() {
  return (
    <div className="relative" id="other-user">
      <p className="ml-16 my-2 font-mono text-gray-500">Jayvee</p>
      <div className="absolute rounded-full overflow-hidden w-10 h-10 ">
        <img
          src="https://ui-avatars.com/api/?name=Jayvee+Hidlao"
          className="w-full h-full object-cover"
          alt="Profile Image"
        />
      </div>
      <div className="ml-15 bg-blue-100 py-1 border-0 shadow-lg px-5 rounded-2xl mr-40 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
        laborum dolores? Nobis, eveniet! Rem minima at quidem culpa tempora vero
        quasi, nostrum, corporis dicta iste voluptatem eveniet suscipit cumque.
        Aliquid! lorem
      </div>
    </div>
  );
}
