import React from 'react';
import Image from 'next/image'; // Import Image component for optimized image handling
import random0 from "@/assets/random0.jpg";
import random1 from "@/assets/random1.jpg";
import random2 from "@/assets/random2.jpg";
import random3 from "@/assets/random3.jpg";
import random4 from "@/assets/random4.jpg";
import random5 from "@/assets/random5.jpg";
import random6 from "@/assets/random6.jpg";
import random7 from "@/assets/random7.jpg";

const orders = [
  {
    id: 1,
    customer: { name: 'John Doe', image: random0 },
    orderNo: '12345',
    amount: '$150.00',
    status: 'Delivered',
  },
  {
    id: 2,
    customer: { name: 'Jane Smith', image: random1 },
    orderNo: '12346',
    amount: '$200.00',
    status: 'Pending',
  },
  {
    id: 3,
    customer: { name: 'Michael Johnson', image: random2 },
    orderNo: '12347',
    amount: '$250.00',
    status: 'Canceled',
  },
  {
    id: 4,
    customer: { name: 'Emily Davis', image: random3 },
    orderNo: '12348',
    amount: '$300.00',
    status: 'Delivered',
  },
  {
    id: 5,
    customer: { name: 'David Brown', image: random4 },
    orderNo: '12349',
    amount: '$350.00',
    status: 'Pending',
  },
  {
    id: 6,
    customer: { name: 'Sophia Wilson', image: random5 },
    orderNo: '12350',
    amount: '$400.00',
    status: 'Canceled',
  },
  {
    id: 7,
    customer: { name: 'Liam Taylor', image: random6 },
    orderNo: '12351',
    amount: '$450.00',
    status: 'Delivered',
  },
  {
    id: 8,
    customer: { name: 'Olivia Anderson', image: random7 },
    orderNo: '12352',
    amount: '$500.00',
    status: 'Pending',
  },
];

const getStatusClass = (status) => {
  if (status === 'Delivered') return 'bg-green-100 text-green-700';
  if (status === 'Pending') return 'bg-red-100 text-red-700';
  if (status === 'Canceled') return 'bg-red-100 text-red-700';
  return '';
};

const RecentOrders = () => {
  return (
    <div className=" bg-neutral-900  rounded-lg p-4 h-96 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 ">Recent Orders</h2>
      <table className="w-full text-sm text-left text-white dark:text-gray-400">
        <thead className="text-xs uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Customer</th>
            <th scope="col" className="px-6 py-3">Order No.</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b text-white bg-neutral-900  dark:border-gray-700">
              <td className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white flex items-center">
                <Image src={order.customer.image} alt={order.customer.name} width={50} height={50} className="w-10 h-10 rounded-full mr-2" />
                {order.customer.name}
              </td>
              <td className="px-6 py-4">{order.orderNo}</td>
              <td className="px-6 py-4">{order.amount}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
