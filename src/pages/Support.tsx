import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { MessageCircle, Phone, Download } from 'lucide-react';

const Support = () => {
  const installationGuides = [
    { name: "Smart Water Controller Installation Guide", filename: "1.pdf", path: "/assets/pdfs/1.pdf" },
    { name: "Power Management System Setup", filename: "2.pdf", path: "/assets/pdfs/2.pdf" },
    { name: "Timer Controller Configuration", filename: "3.pdf", path: "/assets/pdfs/3.pdf" },
    { name: "IoT Network Hub Setup Guide", filename: "4.pdf", path: "/assets/pdfs/4.pdf" },
    // Add more entries here if you have more than 4 PDF guides,
    // ensuring filename and path continue the sequence (e.g., 5.pdf, 6.pdf)
    { name: "Automated Water Pump Installation", filename: "5.pdf", path: "/assets/pdfs/5.pdf" },
    { name: "Smart Power Switch Setup", filename: "6.pdf", path: "/assets/pdfs/6.pdf" },
    { name: "Industrial Controller Manual", filename: "7.pdf", path: "/assets/pdfs/7.pdf" },
    { name: "Home Automation Hub Guide", filename: "8.pdf", path: "/assets/pdfs/8.pdf" }
  ];

  // Assuming your PDFs are now in `public/assets/pdfs/`
  // And are named 1.pdf, 2.pdf, etc.
  // your-project/
  // ├── public/
  // │   └── assets/
  // │       └── pdfs/
  // │           ├── 1.pdf
  // │           ├── 2.pdf
  // │           ├── 3.pdf
  // │           ├── 4.pdf
  // │           └── ... (all your PDFs)
  // ├── src/
  // │   └── pages/
  // │       └── Support.tsx  <-- This file
  // └── ...


  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919494947970', '_blank', 'noopener noreferrer');
  };

  const handlePhoneClick = () => {
    if (window.navigator.userAgent.includes('Mobile') || window.innerWidth < 768) {
      window.location.href = 'tel:+919494947970';
    } else {
      window.open('https://wa.me/919494947970', '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />
      <h1> random text to space </h1><h1> random text to space </h1>
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              <span
                className="bg-gradient-to-r from-[#ff2c2c] to-[#008000]   /* Default gradient */
                          bg-clip-text text-transparent                     /* Apply gradient to text */
                          hover:from-[#008000] hover:to-[#ff2c2c]             /* Hover gradient (reversed) */
                          transition-all duration-300                         /* Smooth transition on hover */
                          "
              >
                Support Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get help with installation, setup, and troubleshooting
            </p>
          </div>

          {/* Quick Contact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg transition-colors duration-300"
              >
                <MessageCircle size={24} />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp Chat</div>
                  <div className="text-sm opacity-90">Instant messaging support</div>
                </div>
              </button>

              <button
                onClick={handlePhoneClick}
                className="flex items-center justify-center space-x-3 bg-primary hover:bg-primary/90 text-primary-foreground p-6 rounded-lg transition-colors duration-300"
              >
                <Phone size={24} />
                <div className="text-left">
                  <div className="font-semibold">+91 9494947970</div>
                  <div className="text-sm opacity-90">Direct phone support</div>
                </div>
              </button>
            </div>
          </section>

          {/* Installation Guides Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Installation Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {installationGuides.map((guide, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Download className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {guide.name}
                      </h3>
                      <a
                        href={guide.path}
                        download={guide.filename}
                        className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Information */}
          <section className="mt-16 bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Need Additional Support?</h2>
            <div className="text-center text-muted-foreground">
              <p className="mb-4">
                Our technical support team is available to help you with any questions or issues you may have with our products.
              </p>
              <p className="mb-4">
                For fastest response, please contact us via WhatsApp or phone during business hours.
              </p>
              <p className="font-semibold">
                Support Hours: Monday - Saturday, 9:00 AM - 7:00 PM IST
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;