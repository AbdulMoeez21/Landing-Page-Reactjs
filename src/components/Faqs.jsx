import React,{ useState } from 'react'
import { faqData } from '../Constants';
const Faqs = () => {


  const [expanded, setExpanded] = useState([]);
  const toggleExpanded = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((q) => q !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };
  return (
    <div className='flexx p-3 flex-col md:flex-row'>
      <div className='w-3/4   md:w-4/5'>
      <h1 className='font-semibold text-3xl '>Any Questions? <br /> We got you.</h1>
      <p className='py-7 text-justify pr-2 md:pr-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, accusamus culpa eum doloremque laborum quia temporibus illum, quidem aliquam eligendi, doloribus eveniet molestias nostrum nihil!</p>

      </div>
      <div className="w-3/4 max-w-2xl mx-auto">
      <h2 className="md:text-2xl text-xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul>
        {faqData.map(({ id, question, answer }) => (
          <li key={id} className="mb-4">
            <button
              onClick={() => toggleExpanded(id)}
              className="flex justify-between items-center w-full p-4 bg-gray-200 text-left hover:bg-gray-300 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <span>{question}</span>
              {expanded.includes(id) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
            {expanded.includes(id) && (
              <div className="bg-gray-100 p-4 mt-2 rounded-md">
                <p className="text-gray-700">{answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Faqs
