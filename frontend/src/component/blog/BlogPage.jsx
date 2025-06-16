// src/pages/BlogPage.jsx
import React, { useState, useEffect } from 'react';
import BlogPostCard from './BlogPostCard'; // Assuming index.js or no specific folder
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import Pagination from './Pagination';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 6; // Example: how many posts per page

  useEffect(() => {
    // Simulate fetching data from an API relevant to Ethiopia
    const fetchPosts = async () => {
      const dummyPosts = Array.from({ length: 20 }, (_, i) => ({
        id: `post-${i + 1}`,
        title: `Exploring the Wonders of Ethiopia: Part ${i + 1}`,
        excerpt: `Discover the rich history, vibrant culture, and stunning landscapes that make Ethiopia a truly unique destination. This post covers ${i % 3 === 0 ? 'ancient sites' : (i % 3 === 1 ? 'local cuisine' : 'wildlife and nature')}.`,
        imageUrl: `https://source.unsplash.com/random/600x400/?ethiopia,${i}`, // Random Ethiopia-themed images
        author: i % 2 === 0 ? 'Dr. Addis Abebe' : 'Ms. Tigist Genet',
        date: new Date(2025, 5, 15 - i).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        category: i % 3 === 0 ? 'Culture & History' : (i % 3 === 1 ? 'Food & Lifestyle' : 'Travel & Nature'),
        slug: `exploring-ethiopia-part-${i + 1}`
      }));

      setTotalPages(Math.ceil(dummyPosts.length / postsPerPage));

      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      setPosts(dummyPosts.slice(startIndex, endIndex));
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Shared Header/Navbar - Not included here, assuming it's a global component */}
      {/* <Header /> */}

      <HeroSection
        title="Welcome to Our Ethiopian Blog!"
        subtitle="Dive into our latest articles, insights, and stories directly from the heart of Ethiopia."
      />

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <section className="flex-grow lg:w-3/4"> {/* flex-grow to take available space */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>

        <aside className="lg:w-1/4"> {/* Fixed width for sidebar on large screens */}
          <Sidebar />
        </aside>
      </div>

      {/* Shared Footer - Not included here, assuming it's a global component */}
      {/* <Footer /> */}
    </div>
  );
};

export default BlogPage;