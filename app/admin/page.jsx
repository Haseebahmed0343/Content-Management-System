import { update_blueHeading, update_subtitle, update_title,update_heroImage, update_pricestarter, update_pricepro, update_priceenterprise } from "../actions";
import Navbar from "@/components/Navbar";
export default function AdminPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Website Editor</h1>
          </header>

          <form action={update_blueHeading} className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Blue Eyebrow Text
              </h2>
              <div className="grid gap-4">
                <div>
                  <input
                    name="blueheading"
                    type="text"
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>

          <form action={update_title} className="space-y-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Headline
              </h2>
              <div className="grid gap-4">
                <div>
                  <input
                    name="title"
                    type="text"
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>


          <form action={update_subtitle} className="space-y-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Sub-headline
              </h2>
              <div className="grid gap-4">
                <div>
                  <textarea
                    name="subtitle"
                    rows="3"
                    className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>


          <form action={update_heroImage} className="space-y-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Hero Image
              </h2>
              <div className="grid gap-4">
                <div>
                  <input
                    name="imageFile"
                    type="file"
                    accept="image/*"
                    className="w-full p-2.5 border rounded-lg"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>

          <form action={update_pricestarter} className="space-y-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Starter Plan Price
              </h2>
              <div className="grid gap-4">
                <div>
                  <input
                      name="priceStarter"
                      type="number"
                      step="0.1"
                      className="w-full pl-7 p-2 border rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>

          <form action={update_pricepro} className="space-y-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Pro Plan Price
              </h2>
              <div className="grid gap-4">
                <div>
                  <input
                      name="pricePro"
                      type="number"
                      step="0.1"
                      className="w-full pl-7 p-2 border rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>

          <form action={update_priceenterprise} className="space-y-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                Enterprise Plan Price
              </h2>
              <div className="grid gap-4">
                <div>
                  <input
                      name="priceEnterprise"
                      type="number"
                      step="0.1"
                      className="w-full pl-7 p-2 border rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    Publish Updates
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
