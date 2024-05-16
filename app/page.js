import Contact from "./_components/contact/page";
import HomePage from "./_components/home/page";
import MenuPage from "./_components/menu/page";

export default function Home() {


  return (
    <div className="space-y-32">
      <HomePage/>
      <MenuPage/>
      <Contact/>
    </div>
  );
}
