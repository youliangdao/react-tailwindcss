import React from "react";

const About = () => {
  return (
    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-2 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
            About Me
          </h1>
          <p className="pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            maxime id fugit? Quas nostrum, ipsam aspernatur corrupti non nisi
            minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            optio officiis accusantium fuga id nisi dolorem odio repellat
            voluptates ipsa dolore maxime officia quasi voluptatum eaque
            sapiente incidunt, quis maiores accusamus rerum amet cum vitae
            voluptate? Consequatur ut iste velit minus ad! Veritatis, quas
            placeat eum illum adipisci nihil sed a impedit aperiam dignissimos,
            provident amet iusto libero tempora repellat aliquid sit quae? Alias
            architecto aliquam veniam dolorum possimus ducimus vel iure, omnis
            beatae ipsam a atque delectus eum reprehenderit nostrum fuga
            officiis sed excepturi aut. Voluptatem consequuntur reprehenderit,
            illo quod officiis tempore vel numquam obcaecati. Assumenda nemo
            ipsum dolores!
          </p>
        </div>
        {/** カードのdivタグです */}
        <div className="flex flex-wrap">
          {/** カードひとつひとつのdivタグ */}
          <div className="md:w-1/3 p-3">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                {/** アイコン */}
                <div className="bg-green-500 text-white rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Web Developer
                </h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque perspiciatis tenetur ad vero iste eveniet et
                  accusantium saepe iure dolores!
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっと見る
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/** カードひとつひとつのdivタグ */}
          <div className="md:w-1/3 p-3">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                {/** アイコン */}
                <div className="bg-green-500 text-white rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Web Developer
                </h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque perspiciatis tenetur ad vero iste eveniet et
                  accusantium saepe iure dolores!
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっと見る
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/** カードひとつひとつのdivタグ */}
          <div className="md:w-1/3 p-3">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                {/** アイコン */}
                <div className="bg-green-500 text-white rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">
                  Web Developer
                </h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque perspiciatis tenetur ad vero iste eveniet et
                  accusantium saepe iure dolores!
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっと見る
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
