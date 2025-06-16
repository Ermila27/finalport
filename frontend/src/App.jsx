import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './component/Layout';
import HashLoader from 'react-spinners/HashLoader'; // Import HashLoader
import LocomotiveScroll from "locomotive-scroll";
import BlogPage from './component/blog/BlogPage';
import AboutMe from './component/AboutMe';
import ProjectGalaxy from './component/project/ProjectGalaxy';
// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./component/project/Projects'));
const ContactForm = React.lazy(() => import('./component/ContactForm'));
const Payment = React.lazy(() => import('./pages/Payment'));
const TechStack = React.lazy(() => import('./component/TechStack'));
const Sucess = React.lazy(() => import('./pages/Sucess'));
const Four = React.lazy(() => import('./pages/Four'));
const Blog=React.lazy
const App = () => {
  
  const [loading, setLoading] = useState(true); // State to track global loading

  useEffect(() => {
    // Check when the DOM is fully loaded
    const handleLoad = () => {
      setLoading(false); // Set loading to false when the app is ready
    };

    // Add event listener for DOMContentLoaded
    if (document.readyState === 'complete') {
      handleLoad(); // If the DOM is already loaded, call handleLoad immediately
    } else {
      window.addEventListener('load', handleLoad); // Wait for the DOM to load
    }

    document.documentElement.classList.add('dark'); // Add dark mode class

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (loading) {
    // Show global loading spinner while the app is loading
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black">
        <HashLoader size={60} color="#4A90E2" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-black">
              <HashLoader size={60} color="#4A90E2" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectGalaxy />} />
            <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutMe />} />

            <Route path="/contact" element={<ContactForm />} />
            <Route path="/s" element={<Sucess />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<Four />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;