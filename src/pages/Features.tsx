import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Brain, Sparkles, Users, MessageSquare, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: any, 
  title: string, 
  description: string 
}) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="h-12 w-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced AI algorithms that understand and adapt to your unique needs and preferences."
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Engage in fluid, context-aware conversations that feel natural and meaningful."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and protected with state-of-the-art security measures."
    },
    {
      icon: Sparkles,
      title: "Personalized Experience",
      description: "Get customized insights and recommendations tailored to your personal growth journey."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with like-minded individuals and share experiences in a supportive environment."
    },
    {
      icon: Zap,
      title: "Real-time Assistance",
      description: "Get instant support and guidance whenever you need it, 24/7."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for Your Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how Mindigenous can help you achieve personal growth and mental wellness with our comprehensive set of features.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Mindigenous today and start your journey towards better mental wellness.
          </p>
          <Link to="/chat">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Features; 