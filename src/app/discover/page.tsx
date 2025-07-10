'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';

// Define the blog item structure
interface Discover {
  title: string;
  content: string;
  url: string;
  thumbnail: string;
}

const DiscoverPage = () => {
  const [discover, setDiscover] = useState<Discover[] | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from /api/discover
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/discover');
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        const validBlogs = data.blogs.filter((b: Discover) => b.thumbnail);
        setDiscover(validBlogs);
      } catch (err: any) {
        console.error('Error fetching data:', err);
        toast.error('Couldn’t load content');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pb-16 space-y-12">

      {/* 🔹 Hero Section */}
      <section className="pt-8">
        <div className="flex items-center space-x-3">
          <Search className="w-6 h-6 text-primary" />
          <h1 className="text-4xl font-bold">Discover</h1>
        </div>
        <p className="mt-4 text-lg text-muted">
          Explore our AI-powered insights, custom solutions, and industry expertise.
        </p>
      </section>

      {/* 🔹 AI Services Section */}
      <section>
        <h2 className="text-2xl font-semibold">Our AI Services</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'AI & Machine Learning',
            'Deep Learning & Neural Networks',
            'Generative AI',
            'Computer Vision',
            'Natural Language Processing',
            'Predictive Analytics',
          ].map((service) => (
            <div
              key={service}
              className="h-48 p-4 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-bold">{service}</h3>
              <p className="text-sm text-muted mt-2">
                Advanced solutions tailored to your business use-cases.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Industries Section */}
      <section>
        <h2 className="text-2xl font-semibold">Industries We Serve</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Finance & Banking',
            'E-commerce & Retail',
            'Healthcare & Life Sciences',
            'Manufacturing & Supply Chain',
            'Real Estate & PropTech',
            'Marketing & Customer Engagement',
          ].map((industry) => (
            <div
              key={industry}
              className="h-40 p-4 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-bold">{industry}</h3>
              <p className="text-sm text-muted mt-2">
                AI solutions optimized for {industry}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Stories & Insights */}
      <section>
        <h2 className="text-2xl font-semibold">Stories & Insights</h2>
        <div className="mt-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {discover?.map((item, i) => {
            const imageUrl =
              new URL(item.thumbnail).origin +
              new URL(item.thumbnail).pathname +
              `?id=${new URL(item.thumbnail).searchParams.get('id')}`;

            return (
              <Link
                key={i}
                href={`/?q=Summary: ${item.url}`}
                target="_blank"
                className="block rounded-lg overflow-hidden bg-light-secondary dark:bg-dark-secondary transform hover:scale-[1.01] transition"
              >
                <Image
                  src={imageUrl}
                  alt={item.title}
                  width={640}
                  height={360}
                  className="object-cover w-full aspect-video"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">
                    {item.title.slice(0, 80)}...
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    {item.content.slice(0, 100)}...
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="text-center py-12 bg-primary text-white rounded-lg">
        <h2 className="text-3xl font-bold">Ready to Transform with AI?</h2>
        <p className="mt-4 text-lg">
          Schedule a free consultation and let’s build your smart AI solution.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-accent text-white font-semibold rounded-md hover:bg-accent-dark transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default DiscoverPage;
