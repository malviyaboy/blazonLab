import CardComponent from "./component/CardComponent";
import MapComponent from "./component/MapComponent";
import ImagePlayer from "./component/ImagePlayer/ImagePlayer";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ImagePlayer/>
        <CardComponent />
        <MapComponent/>
      </main>
    </div>
  );
}
