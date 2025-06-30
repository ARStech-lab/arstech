import { useState, useEffect } from 'react';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Define your main categories here.
  const categories = [
    "Power Management",
    "Water Management",
    "Wireless Controllers",
    "Mobile Based Controllers",
    "Time Controllers"
  ];

  // Define your products. Each product's 'category' is now an ARRAY of strings.
  // I've assigned multiple categories where it made sense based on the product names.
  const products = [
    {
      id: 1,
      name: "Home Protector (1 Phase)",
      category: ["Power Management"], // Example: Multiple categories
      image: "./assets/product-img/1.webp",
      detailImage: "./assets/product-img-info/1.webp"
    },
    {
      id: 2,
      name: "Home Protector (3 Phase)",
      category: ["Power Management"], // Example: Multiple categories
      image: "./assets/product-img/2.webp",
      detailImage: "./assets/product-img-info/2.webp"
    },
    {
      id: 3,
      name: "Semi-AWM System with Visual Indication",
      category: ["Water Management"],
      image: "./assets/product-img/3.webp",
      detailImage: "./assets/product-img-info/3.webp"
    },
    {
      id: 4,
      name: "Fully AWM System (1RL)",
      category: ["Water Management"],
      image: "./assets/product-img/4.webp",
      detailImage: "./assets/product-img-info/4.webp"
    },
    {
      id: 5,
      name: "Fully AWM System (2RL)",
      category: ["Water Management"],
      image: "./assets/product-img/5.webp",
      detailImage: "./assets/product-img-info/5.webp"
    },
    {
      id: 6,
      name: "Fully AWM System (3RL)",
      category: ["Water Management"],
      image: "./assets/product-img/6.webp",
      detailImage: "./assets/product-img-info/6.webp"
    },
    {
      id: 7,
      name: "Water Level Indicator with Alarm",
      category: ["Water Management", "Smart Home Devices"],
      image: "./assets/product-img/7.webp",
      detailImage: "./assets/product-img-info/7.webp"
    },
    {
      id: 8,
      name: "Fully AWM System with Dual Motor Controller",
      category: ["Water Management"],
      image: "./assets/product-img/8.webp",
      detailImage: "./assets/product-img-info/8.webp"
    },
    {
      id: 9,
      name: "Wireless Water Management System with Visual Indication",
      category: ["Water Management", "Wireless Controllers"],
      image: "./assets/product-img/9.webp",
      detailImage: "./assets/product-img-info/9.webp"
    },
    {
      id: 10,
      name: "Wireless Water Management System (1RL)",
      category: ["Water Management", "Wireless Controllers"],
      image: "./assets/product-img/10.webp",
      detailImage: "./assets/product-img-info/10.webp"
    },
    {
      id: 11,
      name: "Wireless Water Management System (2RL)",
      category: ["Water Management", "Wireless Controllers"],
      image: "./assets/product-img/11.webp",
      detailImage: "./assets/product-img-info/11.webp"
    },
    {
      id: 12,
      name: "Wireless Water Management System (3RL)",
      category: ["Water Management", "Wireless Controllers"],
      image: "./assets/product-img/12.webp",
      detailImage: "./assets/product-img-info/12.webp"
    },
    {
      id: 13,
      name: "Wireless Water Management System with GSM (1RL, 1 Phase)",
      category: ["Water Management", "Wireless Controllers", "Mobile Based Controllers"],
      image: "./assets/product-img/13.webp",
      detailImage: "./assets/product-img-info/13.webp"
    },
    {
      id: 14,
      name: "Wireless Water Management System with GSM (3RL, 3 Phase)",
      category: ["Water Management", "Wireless Controllers", "Mobile Based Controllers"],
      image: "./assets/product-img/14.webp",
      detailImage: "./assets/product-img-info/14.webp"
    },
    {
      id: 15,
      name: "Digital Cyclic Timer",
      category: ["Time Controllers"],
      image: "./assets/product-img/15.webp",
      detailImage: "./assets/product-img-info/15.webp"
    },
    {
      id: 16,
      name: "Analog Cyclic Timer",
      category: ["Time Controllers"],
      image: "./assets/product-img/15.webp", // Reusing image 15 for analog timer
      detailImage: "./assets/product-img-info/15.webp" // Reusing info image 15
    },
  ];

  // This now reads the URL hash to scroll to the product.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const productElement = document.getElementById(id);

      if (productElement) {
        const headerOffset = 100; // Adjust this value to match your sticky header's height
        const elementPosition = productElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    // If no category is selected, show all products
    if (selectedCategory.length === 0) {
      return true;
    }
    // Check if ANY of the product's categories are included in the selected categories
    // This is the key logic for multi-category filtering
    return product.category.some(cat => selectedCategory.includes(cat));
  });

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleOrderClick = () => {
    window.open('https://wa.me/919494947970', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />

      <div className="pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Support Center Heading (with gradient transition) */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              <span className="bg-gradient-to-r from-primary to-[#ff2c2c] bg-clip-text text-transparent">
                OUR PRODUCTS
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our range of innovative products designed to meet your needs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-card p-6 rounded-lg shadow-lg sticky top-32">
                <h3 className="text-xl font-semibold mb-6">Filters</h3>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedCategory.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="rounded border-border"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    id={`product-${product.id}`}
                    key={product.id}
                    className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-mt-28"
                  >
                    {/* Image on card opens 'product.image' in lightbox */}
                    <div
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(product.image)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover zoom-hover transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {product.name}
                      </h3>
                      {/* Displaying product categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.category.map(cat => (
                          <span
                            key={`${product.id}-${cat}`} // Ensure unique key for each category tag
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {/* Order for Price button (opens WhatsApp) */}
                        <button
                          onClick={handleOrderClick}
                          className="block w-full
                                     bg-gradient-to-r from-[#004578] to-[#ff2c2c]
                                     text-white py-2 px-4 rounded-lg
                                     hover:from-[#ff2c2c] hover:to-[#004578]
                                     transition-all duration-300 font-medium text-center shadow-md"
                        >
                          Order for Price
                        </button>
                        {/* More Details button (opens lightbox with 'product.detailImage') */}
                        <button
                          onClick={() => openLightbox(product.detailImage)}
                          className="block w-full
                                     bg-gradient-to-r from-[#ff2c2c] to-[#004578]
                                     text-white py-2 px-4 rounded-lg
                                     hover:from-[#1A1A77] hover:to-[#ff2c2c]
                                     transition-all duration-300 font-medium text-center shadow-md"
                        >
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Product Detail"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Products;