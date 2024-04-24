import file from "../assets/file.png";
import file2 from "../assets/file2.png";

function Article() {
  return (
    <article class="max-w-2xl mx-auto py-8 md:py-12 px-4 lg:px-0 lg:pb-32 mt-20">
      <h1 class="text-3xl md:text-5xl font-bold lg:text-6xl leading-none mb-6 lg:mb-8 text-red">
        The reuse revolution will be realised
      </h1>
      <div class="mb-2 text-gray-400 flex justify-between">
        <p>Posted on December 17th 2023</p>

        <div class="flex items-center justify-center text-gray-900 text-xs">
          <span class="mr-4 font-medium font-mono uppercase tracking-wider">
            share
          </span>
          <a
            target="_blank"
            // onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=400');return false;"
            href="#"
            class="text-red hover:text-black pr-3 transition-color duration-300"
          >
            <svg
              class="h-5"
              viewBox="0 0 16 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M14.4 3.7C14.4 3.9 14.4 4 14.4 4.2C14.4 8.5 11.1 13.5 5 13.5C3.2 13.5 1.5 13 0 12C0.3 12.1 0.5 12.1 0.8 12.1C2.3 12.1 3.7 11.5 4.9 10.7C3.4 10.6 2.2 9.7 1.8 8.4C2 8.4 2.2 8.4 2.4 8.4C2.7 8.4 3 8.4 3.3 8.3C1.8 8 0.6 6.7 0.6 5.1C1.1 5.3 1.6 5.5 2.1 5.5C1.2 4.9 0.7 3.9 0.7 2.8C0.7 2.1 0.8 1.6 1.1 1.1C2.7 3.1 5.2 4.4 7.9 4.5C7.8 4.3 7.8 4 7.8 3.8C7.8 2 9.3 0.5 11.1 0.5C12 0.5 12.9 0.9 13.5 1.5C14.2 1.4 14.9 1.1 15.6 0.7C15.3 1.5 14.8 2.1 14.1 2.6C14.8 2.5 15.4 2.3 16 2C15.6 2.7 15 3.3 14.4 3.7Z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            // onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=400');return false;"
            href="#"
            class="text-red hover:text-black pr-3 transition-color duration-300"
          >
            <svg
              class="h-5"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M15.6998 7.9998C15.6998 11.8998 12.8998 15.0998 9.1998 15.6998V10.1998H10.9998L11.3998 7.9998H9.1998V6.4998C9.1998 5.8998 9.4998 5.2998 10.4998 5.2998H11.4998V3.3998C11.4998 3.3998 10.5998 3.2998 9.6998 3.2998C7.8998 3.2998 6.7998 4.3998 6.7998 6.2998V7.9998H4.7998V10.1998H6.7998V15.6998C3.0998 15.0998 0.299805 11.8998 0.299805 7.9998C0.299805 3.6998 3.6998 0.299805 7.9998 0.299805C12.2998 0.299805 15.6998 3.6998 15.6998 7.9998Z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            // onclick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=400');return false;"
            href="#"
            class="text-red hover:text-black pr-3 transition-color duration-300"
          >
            <svg viewBox="0 0 10 10" fill="none" class="h-5">
              <path
                d="M8.9375 0H0.666016C0.300781 0 0 0.322266 0 0.708984V8.9375C0 9.32422 0.300781 9.625 0.666016 9.625H8.9375C9.30273 9.625 9.625 9.32422 9.625 8.9375V0.708984C9.625 0.322266 9.30273 0 8.9375 0ZM2.90039 8.25H1.48242V3.67383H2.90039V8.25ZM2.19141 3.0293C1.71875 3.0293 1.35352 2.66406 1.35352 2.21289C1.35352 1.76172 1.71875 1.375 2.19141 1.375C2.64258 1.375 3.00781 1.76172 3.00781 2.21289C3.00781 2.66406 2.64258 3.0293 2.19141 3.0293ZM8.25 8.25H6.81055V6.01562C6.81055 5.5 6.81055 4.8125 6.08008 4.8125C5.32812 4.8125 5.2207 5.39258 5.2207 5.99414V8.25H3.80273V3.67383H5.15625V4.29688H5.17773C5.37109 3.93164 5.84375 3.54492 6.53125 3.54492C7.9707 3.54492 8.25 4.51172 8.25 5.73633V8.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <figure class="bg-cream min-w-full my-4 -mx-4 md:my-8 md:-mx-12 lg:-mx-24 mb-6 md:mb-12">
        {/* <img src="https://images.ctfassets.net/unegh79359km/2zlLjPGVRcUTCK7j657Rot/e0b0dbb664f9403f703ff201774d6e9e/Unlocking_a_reuse_revolution__scaling_returnable_packaging_study__1_-1_page-0001.jpg?w=1200&amp;fm=webp" class="block w-full h-auto b-lazy b-loaded" alt="The reuse revolution will be realised"> */}
        <img src={file} class="block w-full h-auto b-lazy b-loaded" alt="img" />
      </figure>
      <section class="prose lg:prose-xl text-gray-900 prose-h1:text-red prose-h2:text-red prose-h3:text-red prose-strong:text-red">
        <p class="pb-4">
          We generate 114m tonnes of packaging waste every year, having used
          &gt;2 gigatons of CO2e to make it in the first place. Every year we
          create more and more packaging, more and more waste. We can’t
          lightweight our way out of this. Time for a radical rethink? We think
          so.
        </p>
        <p class="pb-4">
          And thankfully it’s not just us. The Ellen MacArthur Foundation
          recently shared their homework on reuse. Their conclusion? Reuse is
        </p>
        <ul class="pb-4">
          <li class="pb-2">Better for the environment </li>
          <li class="pb-2">Better for the bottom line </li>
        </ul>
        <p class="pb-4">
          It’s great to see the numbers being crunched and demonstrate what can
          be achieved. We think we can go further, quicker. We’re already
          proving the benefits. So what’s in the report and what’s our take?
        </p>
        <p class="pb-4">
          <strong>The power of reuse</strong>
          We’re encouraged that the CPG industry is starting to recognise the
          opportunity that reuse represents. It comes through in the
          testimonials of the 60+ organisations that supported the EMF report
          and in our daily conversations with retailers and brands. And let’s be
          clear, reuse is not just some environmental aspiration; it’s a
          tangible solution which can reduce plastic pollution by over 20%
          annually by 2040 whilst cutting down on virgin material use,
          greenhouse gas emissions, and water consumption.
        </p>
        <p class="pb-4">
          Despite much good work, the report is clear that the current pace of
          change falls short and is too reliant on plastic reduction, a one-time
          solution compared to the compounding benefits of reuse. Our current
          packaging is carbon positive after 5 uses, our next generation
          packaging has the potential to be positive after 2 uses, even better
          after 3, better still after 4 and…well you get the picture.
        </p>
        <p class="pb-4">
          <strong>You return, we’ll refill</strong>
        </p>
        <p class="pb-4">
          In-store refill, where customers own and refill their packaging, can
          play a crucial role in kick-starting behaviour change and is loved by
          many zero-waste shoppers. But there’s a reason the EMF report focuses
          on prefilled products in returnable packaging. Returnables align more
          closely with existing shopping behaviours, filling and packaging
          systems, and address reuse challenges such as hygiene concerns, retail
          space disruption and convenience. Put simply, returnable packaging can
          unlock the power of reuse across lots of products, lots of stores and
          as the system scales, multiple price points.
        </p>
        <p class="pb-4">
          We already sell over 80 products through our current customers, and
          our packaging innovation will enable many more. Products like fresh
          soup, deli items and yoghurt, all currently housed in intensively
          packaged single use pots. We plan to bring these products to market in
          the next 12 months, working with big grocery retailers to do so.
          Taking big plastic pots out of the recycling (or worse, black bin bag)
          can act as a really powerful stimulus to behaviour change, something
          we can attribute to the success of Abel &amp; Cole’s launch of milk in
          reusable plastic bottles.
        </p>
        <p class="pb-4">
          <strong>Planet and Profit</strong>
          EMF’s modelling reveals that returnable plastic packaging consistently
          outperforms single-use alternatives. At scale, returnable packaging
          systems can lead to substantial reductions in GHG emissions (up to
          69%), water use (up to 70%) and material consumption (up to 76%).
        </p>
        <p class="pb-4">
          {/* <img src="//images.ctfassets.net/unegh79359km/6WDtwcm7cFvlaOPRO81T9s/bbbaf85e5cc16d88a68b656b56496303/Unlocking_a_reuse_revolution__scaling_returnable_packaging_study__1_-9_page-0001.jpg" alt="Unlocking a reuse revolution scaling returnable packaging study (1)-9 page-0001Scaling"> */}
          <img src={file2} alt="image" />
        </p>
        <p class="pb-4">
          Whilst the environmental benefits may be the reason why reuse makes it
          into brand packaging strategies, the economic case can also be
          compelling. EMF’s modelling shows that reuse can be cheaper than
          single use, even at medium scale, by up to 16%. This even before the
          likely cost headwinds coming the way of single use are factored in:
          EPR fees alone could increase packaging costs by as much as 30%. It
          also shows the relative costs in infrastructure development (when
          compared to recycling and other approaches) are multiple times lower.
        </p>
        <p class="pb-4">
          But aren’t Dizzie selling packaged food? That doesn’t look so good
          right? Maybe. But perhaps we see things a little differently. Packaged
          food may not have the highest impact but it’s a perfect category in
          which to start - with lower technical hurdles, production &amp;
          cleaning costs and creating behaviour change on everyday store
          cupboard essentials where the technical challenges are lower than for
          liquids or fresh!
        </p>
        <p class="pb-4">
          At Dizzie, we’re already delivering a profitable service to our
          customers, a case of having your cake and eating it (and then
          returning the packaging). The efficiency of our ReuseHub, an
          integrated solution where we both fill and label products in reusable
          packaging and then take back to clean means we are already reducing
          the costs of reuse. The knowledge that comes with handling packaging
          at both ends of the supply chain results in packaging designed to be
          super-efficient through the de-labelling and cleaning process.
          Innovation in material use further shifts the economics of reuse and
          opens up new categories such as fresh food.{" "}
        </p>
        <p class="pb-4">
          All this means we’re proving the business case now. We’ve increased
          volumes 4x since the start of the year and are only just getting
          started. Next year we will have well over 100 products in reusable
          packaging and will convert more and more single use shoppers as we
          narrow the price gap.
        </p>
        <p class="pb-4">
          <strong>Standardisation, sharing and scale</strong>
          The study identifies three key drivers for the success of return
          systems:
        </p>
        <ol class="pb-4">
          <li class="pb-2">Scale and shared infrastructure </li>
          <li class="pb-2">Packaging standardisation and pooling </li>
          <li class="pb-2">
            High return rates and clear incentives to return{" "}
          </li>
        </ol>
        <p class="pb-4">
          We couldn’t have put it better ourselves and described these key
          enablers in more details in a recent white paper [
          <a href="#">link to vision</a>]
        </p>
        <p class="pb-4">
          <strong>Get on with it</strong>
          Perhaps the big message in the EMF report is the need for urgency.
          While progress has been made in the past five years, the momentum
          needs to accelerate to deliver the scale required. The report
          underscores the need for collaboration involving stakeholders across
          the value chain. At Dizzie we are building the infrastructure to
          enable reuse, working with cleaning and packaging experts, retailers,
          brands and technology companies to design scalable, cost-effective
          solutions.
        </p>
        <p class="pb-4">
          It’s also easy to let perfection be the barrier to progress - yes, we
          agree that the transition from single-use to reuse is a major
          undertaking that requires a collaborative industry-wide approach -
          but, the foundations for this shift already exist, including the
          infrastructure, mindset change, and existing customer behaviour.
        </p>
        <p class="pb-4">So why wait, why not give us a spin?</p>
        <p class="pb-4">
          <a href="#">
            Unlocking a reuse revolution: scaling returnable packaging
          </a>
        </p>
        <p class="pb-4">
          <a href="#">Invest in Dizzie (capital is at risk)</a>
        </p>
      </section>
    </article>
  );
}

export default Article;
