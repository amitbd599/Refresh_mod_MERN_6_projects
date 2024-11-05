// "use client";
// import { MyAPI } from "@/api/api_request";
// import axios from "axios";
// import { useEffect, useState } from "react";

const AllList = ({ data }) => {
  //   let [data, setData] = useState([]);

  //!   Immediately-invoked function expression (IIFE)
  //   useEffect(() => {
  //     (async () => {
  //       let fetchData = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       setData(fetchData.data);
  //     })();
  //   }, []);

  //   useEffect(() => {
  //     (async () => {
  //       let result = await MyAPI();
  //       setData(result);
  //     })();
  //   }, []);

  console.log(data);

  return (
    <>
      {/* component */}
      <div className='flex min-h-screen items-center justify-center'>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-xl'>
            <thead>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='py-3 px-4 text-left'>id</th>
                <th className='py-3 px-4 text-left'>title</th>
                <th className='py-3 px-4 text-left'>body</th>
              </tr>
            </thead>
            <tbody className='text-blue-gray-900'>
              {data.map((item, index) => (
                <tr key={index} className='border-b border-blue-gray-200'>
                  <td className='py-3 px-4'>{item.id}</td>
                  <td className='py-3 px-4'>{item.title}</td>
                  <td className='py-3 px-4'>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='w-full pt-5 px-4 mb-8 mx-auto '>
            <div className='text-sm text-gray-700 py-1 text-center'>
              Made with{" "}
              <a
                className='text-gray-700 font-semibold'
                href='https://www.material-tailwind.com/docs/html/table/?ref=tailwindcomponents'
                target='_blank'
              >
                Material Tailwind
              </a>{" "}
              by{" "}
              <a
                href='https://www.creative-tim.com?ref=tailwindcomponents'
                className='text-gray-700 font-semibold'
                target='_blank'
              >
                {" "}
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllList;
