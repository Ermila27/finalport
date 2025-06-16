// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  const categories = [
    { name: 'Culture & History', count: 5 },
    { name: 'Food & Lifestyle', count: 8 },
    { name: 'Travel & Nature', count: 12 },
    { name: 'Technology in Ethiopia', count: 3 },
    { name: 'Local Businesses', count: 4 },
  ];

  const recentPosts = [
    { title: 'Exploring the Rock-Hewn Churches of Lalibela', slug: 'lalibela-churches' },
    { title: 'The Flavors of Injera: A Culinary Journey', slug: 'injera-culinary-journey' },
    { title: 'Wildlife Wonders: Simien Mountains National Park', slug: 'simien-mountains-wildlife' },
    { title: 'Addis Ababa: Africa\'s Diplomatic Capital', slug: 'addis-ababa-capital' },
  ];

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value;
    console.log('Search Blog for:', searchTerm);
    // In a real app, you'd navigate to a search results page
  };

  const handleSubscribeSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    console.log('Subscribe email:', email);
    alert(`Thank you for subscribing, ${email}!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Search Blog</h3>
        <form className="flex gap-2" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map(cat => (
            <li key={cat.name}>
              <a href={`/blog/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">
                {cat.name} <span className="text-gray-500 text-sm">({cat.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map(post => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 block">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-0">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">Subscribe</h3>
        <p className="text-gray-700 mb-4">Get our latest insights on Ethiopia directly to your inbox!</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubscribeSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;