import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 flex flex-col items-center justify-center gap-4">
              <span className="mt-52 font-briller text-2xl sm:text-3xl md:text-4xl">WELCOME TO</span>
              <span className="text-primary font-briller invisible">
                MINDIGENOUS
              </span>
            </h1>
            <p className="text-xl text-white mb-6">
              Your AI-powered platform for mental wellness and personal growth.
              <br />
              Connect with intelligent agents and embark on a journey of self-discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Chatting <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose <span className="font-briller">MINDIGENOUS</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 glass-card rounded-lg">
              <div className="logo-container">
                <Logo size={128} />
              </div>
              <div className="content-container text-left">
                <h3 className="text-xl font-semibold mb-2 text-white -mt-16">AI-Powered Support</h3>
                <p className="text-white">
                  Connect with intelligent agents that understand and adapt to your needs.
                </p>
              </div>
            </div>
            <div className="p-6 glass-card rounded-lg">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Personalized Experience</h3>
              <p className="text-white">
                Get tailored guidance and support based on your unique journey.
              </p>
            </div>
            <div className="p-6 glass-card rounded-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Community Support</h3>
              <p className="text-white">
                Join a supportive community of individuals on similar paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Start your path to mental wellness with <span className="font-briller">MINDIGENOUS</span> today. Our AI-powered platform is here to support you every step of the way.
          </p>
          <Link to="/chat">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home; 