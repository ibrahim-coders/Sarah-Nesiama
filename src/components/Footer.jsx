const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Sarah Nesiama</h3>
            <p className="text-white/80 text-lg">Your Silent Hype Woman 💻✍️</p>
            <p className="text-white/60 mt-2">
              Ghostwriter & Content Strategist
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-white/80 text-sm">
                Ibadan, Oyo State, Nigeria
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Education</h4>
              <p className="text-white/80 text-sm">
                English Degree, MBA in Marketing
                <br />
                University of Ibadan
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <p className="text-white/80 text-sm">
                2,565 LinkedIn followers
                <br />
                500+ connections
              </p>
            </div>
          </div>

          <div className="border-t text-white/80 pt-8">
            <p className="text-white/60 text-sm">
              © 2025 Sarah Nesiama. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
