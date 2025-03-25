import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Heart, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = ({ icon: Icon, title, content }: {
  icon: any,
  title: string,
  content: string
}) => (
  <div className="flex flex-col items-center text-center p-6">
    <Icon className="h-16 w-16 text-primary mb-4" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 max-w-md">{content}</p>
  </div>
);

const About = () => {
  const sections = [
    {
      icon: Heart,
      title: "Our Mission",
      content: "To make mental wellness accessible to everyone through innovative AI technology, fostering a supportive environment for personal growth and emotional well-being."
    },
    {
      icon: Target,
      title: "Our Vision",
      content: "To create a world where everyone has access to personalized mental wellness support, breaking down barriers to mental health resources through technology."
    },
    {
      icon: Award,
      title: "Our Values",
      content: "We believe in empathy, innovation, privacy, and inclusivity. These core values guide our development of AI solutions that truly understand and support our users."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="font-briller">MINDIGENOUS</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We're on a mission to revolutionize mental wellness through AI-powered support and community connection.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {sections.map((section, index) => (
              <AboutSection key={index} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                <span className="font-briller">MINDIGENOUS</span> was born from a simple yet powerful idea: everyone deserves access to quality mental wellness support. We recognized that traditional mental health resources weren't always accessible or personalized enough to meet individual needs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                By combining cutting-edge AI technology with a deep understanding of mental wellness, we've created a platform that provides personalized support to users worldwide. Our AI companions are designed to understand, adapt, and grow with you on your journey to better mental health.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Today, we continue to innovate and expand our services, always keeping our core mission in focus: making mental wellness accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of our mission to transform mental wellness support. Start your journey with <span className="font-briller">MINDIGENOUS</span> today.
          </p>
          <Link to="/chat">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default About; 