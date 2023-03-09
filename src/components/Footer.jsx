import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="h-full p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div class="md:flex md:justify-between">
          <div class="px-12 ">
            <span class="self-center text-3xl md:text-2xl  font-semibold whitespace-nowrap  dark:text-white">
              RAO
            </span>
            <p className="md:w-96 w-64 pt-2 pb-10 text-justify md:text-left dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est,
              dolorem nobis blanditis maxime accusantium quasi iste ipsum!
              Nostrum natus quas aliquam! 
              
              
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 pl-4 ">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    About Us
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Blog
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Facebook Followers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Instagram Followers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Twitter Followers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Tiktok Followers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Proposal Template
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Invoices
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Tutorial
                  </a>
                </li>
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    How to increase activity
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="" class="hover:underline">
              Rao inc
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
