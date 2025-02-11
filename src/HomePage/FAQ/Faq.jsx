const Faq = () => {
  return (
    <div className=" mt-10 pb-28">
      <div className="w-10/12 mx-auto">
        {/* Text */}
        <div className="text-center flex justify-center items-center flex-col">
          <h1 className="text-2xl rounded-md font-medium text-[#8B71FB] border-2 border-[#8B71FB] w-fit py-2 px-8">
           FAQ
          </h1>

          <h1 className="text-6xl my-10 font-bold ">
          Frequently Asked Questions
          </h1>
        </div>



        <div className="space-y-8">


            
        <div className="collapse collapse-plus py-6 bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-lg md:text-xl lg:text-2xl font-semibold ">How do I sign up for CloudifyPro?</div>
  <div className="collapse-content">
    <p className="text-lg font-semibold"> To sign up for CloudifyPro, simply visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to go in no time.</p>
  </div>
</div>



        <div className="collapse collapse-plus py-6 bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-lg md:text-xl lg:text-2xl font-semibold ">Is there a free trial available?</div>
  <div className="collapse-content">
    <p className="text-lg font-semibold"> Cloudify Pro offers a 7-day free trial with manual approval. Visit their website to request access and experience their platform's features risk-free.</p>
  </div>
</div>



        <div className="collapse collapse-plus py-6 bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-lg md:text-xl lg:text-2xl font-semibold ">What payment methods do you accept?</div>
  <div className="collapse-content">
    <p className="text-lg font-semibold"> Cloudify Pro typically accepts common payment methods like credit/debit cards (Visa, Mastercard), PayPal, and bank transfers. For specific options, check their website or contact support.</p>
  </div>
</div>



        <div className="collapse collapse-plus py-6 bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-lg md:text-xl lg:text-2xl font-semibold ">Can I cancel my subscription at any time?</div>
  <div className="collapse-content">
    <p className="text-lg font-semibold"> Yes, most services like Cloudify Pro allow you to cancel your subscription anytime. Check their cancellation policy on the website for specific details or conditions.</p>
  </div>
</div>



        <div className="collapse collapse-plus py-6 bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-lg md:text-xl lg:text-2xl font-semibold ">Is CloudifyPro compatible with mobile devices?</div>
  <div className="collapse-content">
    <p className="text-lg font-semibold">Yes, Cloudify Pro is designed to be compatible with mobile devices, offering a seamless experience through its responsive interface or dedicated mobile app, if available.







</p>
  </div>
</div>



        <div className="collapse collapse-plus py-6 bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-lg md:text-xl lg:text-2xl font-semibold ">Can I upgrade or downgrade my plan at any time?</div>
  <div className="collapse-content">
    <p className="text-lg font-semibold"> Yes, Cloudify Pro typically allows users to upgrade or downgrade their plans anytime. Check their website or contact support for specific plan adjustment details.</p>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Faq;
