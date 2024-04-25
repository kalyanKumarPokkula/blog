import "./Blogs.css";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div class="w-full mt-24">
      <header class="text-center py-6 md:py-8">
        <h1 class="text-4xl font-bold md:text-5xl">Blogs</h1>
      </header>
      <div class="mx-auto px-4 flex flex-col justify-center items-center md:px-12 2xl:items-start 2xl:flex-row 2xl:flex-wrap">
        <article class="w-full max-w-2xl 2xl:w-1/2 md:p-4 2xl:p-6">
          <div class="bg-white mb-6 group shadow hover:shadow-none rounded-lg overflow-hidden">
            <a href="#">
              <figure class="bg-cream w-full">
                <picture
                  class="aspect bg-center bg-cover relative block b-lazy b-loaded"

                  // style='background-image: url("https://images.ctfassets.net/unegh79359km/2zlLjPGVRcUTCK7j657Rot/e0b0dbb664f9403f703ff201774d6e9e/Unlocking_a_reuse_revolution__scaling_returnable_packaging_study__1_-1_page-0001.jpg?w=1200&fm=webp");'
                >
                  <img
                    src="https://images.ctfassets.net/unegh79359km/2zlLjPGVRcUTCK7j657Rot/e0b0dbb664f9403f703ff201774d6e9e/Unlocking_a_reuse_revolution__scaling_returnable_packaging_study__1_-1_page-0001.jpg?w=1200&fm=webp"
                    alt="image"
                  />
                </picture>
              </figure>
            </a>
            <div class="p-6">
              <a href="/blog/the-reuse-revolution-will-be-realised">
                <header>
                  <div class="mb-2 flex text-gray-400 text-sm md:text-base">
                    <time datetime="2015-05-16 19:00">
                      Posted on December 17th 2023
                    </time>
                  </div>
                  <h2 class="text-xl md:text-3xl font-bold leading-snug text-red">
                    The reuse revolution will be realised
                  </h2>
                  <div class="md:text-lg mt-2 leading-snug">
                    Our take on the The Ellen MacArthur Foundation's latest
                    report -{" "}
                  </div>
                </header>
              </a>
              <footer class="mt-6 flex items-start">
                <a href="#"></a>
                <Link to="/blog/blog/1">
                  <a href="#" class="btn btn-primary lg:text-lg">
                    Read more
                  </a>
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <article class="w-full max-w-2xl 2xl:w-1/2 md:p-4 2xl:p-6">
          <div class="bg-white mb-6 group shadow hover:shadow-none rounded-lg overflow-hidden">
            <a href="/blog/lifting-the-lid-on-tracking">
              <figure class="bg-cream w-full">
                <picture
                  class="aspect bg-center bg-cover relative block b-lazy b-loaded"
                  // style='background-image: url("https://images.ctfassets.net/unegh79359km/6tR3vS5a3XDbUs6CIVLGnN/6987abdbadb934d01266e09bb72594b5/ReuseOS_mockup_-_pink.jpg?w=1200&fm=webp");'
                >
                  <img
                    src="https://images.ctfassets.net/unegh79359km/6tR3vS5a3XDbUs6CIVLGnN/6987abdbadb934d01266e09bb72594b5/ReuseOS_mockup_-_pink.jpg?w=1200&fm=webp"
                    alt="image"
                  />
                </picture>
              </figure>
            </a>
            <div class="p-6">
              <a href="#">
                <header>
                  <div class="mb-2 flex text-gray-400 text-sm md:text-base">
                    <time datetime="2015-05-16 19:00">
                      Posted on July 18th 2023
                    </time>
                  </div>
                  <h2 class="text-xl md:text-3xl font-bold leading-snug text-red">
                    Lifting the lid on Tracking
                  </h2>
                  <div class="md:text-lg mt-2 leading-snug">
                    A deeper dive into how we track our pots to make sure they
                    find their way home to us, ready for reuse.
                  </div>
                </header>
              </a>
              <footer class="mt-6 flex items-start">
                <a href="#"></a>
                <Link to="/blog/blog/1">
                  <a href="#" class="btn btn-primary lg:text-lg">
                    Read more
                  </a>
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <article class="w-full max-w-2xl 2xl:w-1/2 md:p-4 2xl:p-6">
          <div class="bg-white mb-6 group shadow hover:shadow-none rounded-lg overflow-hidden">
            <a href="/blog/dizzies-online-store-to-close">
              <figure class="bg-cream w-full">
                <picture
                  class="aspect bg-center bg-cover relative block b-lazy b-loaded"
                  // style='background-image: url("https://images.ctfassets.net/unegh79359km/3rJ3EqEt2XRY4vlCpYCcTp/da6f73162037b65c6cb7cdf7e779b583/Copy_of_Dizzie_Studio_19.08.22_0047-min.jpg?w=1200&amp;fm=webp");'
                >
                  <img
                    src="https://images.ctfassets.net/unegh79359km/3rJ3EqEt2XRY4vlCpYCcTp/da6f73162037b65c6cb7cdf7e779b583/Copy_of_Dizzie_Studio_19.08.22_0047-min.jpg?w=1200&fm=webp"
                    alt="img"
                  />
                </picture>
              </figure>
            </a>
            <div class="p-6">
              <a href="/blog/dizzies-online-store-to-close">
                <header>
                  <div class="mb-2 flex text-gray-400 text-sm md:text-base">
                    <time datetime="2015-05-16 19:00">
                      Posted on February 9th 2023
                    </time>
                  </div>
                  <h2 class="text-xl md:text-3xl font-bold leading-snug text-red">
                    Dizzie’s online store to close
                  </h2>
                  <div class="md:text-lg mt-2 leading-snug">
                    Partnerships with new retailers, timings and arrangements
                    for the closure, how to buy our products after the store
                    closes, some achievements so far, bigger things in the
                    future.
                  </div>
                </header>
              </a>
              <footer class="mt-6 flex items-start">
                <a href="/blog/dizzies-online-store-to-close"></a>
                <Link to="/blog/blog/1">
                  <a href="#" class="btn btn-primary lg:text-lg">
                    Read more
                  </a>
                </Link>
              </footer>
            </div>
          </div>
        </article>
        <article class="w-full max-w-2xl 2xl:w-1/2 md:p-4 2xl:p-6">
          <div class="bg-white mb-6 group shadow hover:shadow-none rounded-lg overflow-hidden">
            <a href="/blog/designing-a-sustainable-packaging-system">
              <figure class="bg-cream w-full">
                <picture
                  class="aspect bg-center bg-cover relative block b-lazy b-loaded"
                  // style='background-image: url("https://images.ctfassets.net/unegh79359km/7wlQJjg6xOchItIuFwdpJq/7779b0e844d63f63f88f92814c4d8738/Dizzie_Studio_19.08.22_0458.jpg?w=1200&amp;fm=webp");'
                >
                  <img
                    src="https://images.ctfassets.net/unegh79359km/7wlQJjg6xOchItIuFwdpJq/7779b0e844d63f63f88f92814c4d8738/Dizzie_Studio_19.08.22_0458.jpg?w=1200&fm=webp"
                    alt="image"
                  />
                </picture>
              </figure>
            </a>
            <div class="p-6">
              <a href="/blog/designing-a-sustainable-packaging-system">
                <header>
                  <div class="mb-2 flex text-gray-400 text-sm md:text-base">
                    <time datetime="2015-05-16 19:00">
                      Posted on December 19th 2022
                    </time>
                  </div>
                  <h2 class="text-xl md:text-3xl font-bold leading-snug text-red">
                    Designing a sustainable packaging system 🌱
                  </h2>
                  <div class="md:text-lg mt-2 leading-snug">
                    We’re very proud of the 1 million pieces of plastic Dizzie
                    has already saved, but we care about more than just plastic.
                  </div>
                </header>
              </a>
              <footer class="mt-6 flex items-start">
                <a href="/blog/designing-a-sustainable-packaging-system"></a>
                <a
                  href="/blog/designing-a-sustainable-packaging-system"
                  class="btn btn-primary lg:text-lg"
                >
                  Read more
                </a>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Blogs;
