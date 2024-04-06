import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="background w-screen h-full flex flex-col items-center">
        <h1 className="bg-white rounded-lg w-11/12 text-center mt-10 py-2
        text-3xl font-bold">
            RANDOM GIFS
        </h1>
        <div className="flex flex-col w-full items-center gap-y-10 mt-7">
          <Random/>
          <Tag/>
        </div>
    </div>
  )
}
