import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const gymPricingOptions = [
        {
          id: 1,
          name: "Basic Plan",
          price: 30,
          duration: "1 month",
          features: [
            "Access to gym equipment",
            "Locker usage",
            "1 free personal training session",
            "Basic health assessment",
            "Access during off-peak hours"
          ]
        },
        {
          id: 2,
          name: "Standard Plan",
          price: 75,
          duration: "3 months",
          features: [
            "Access to gym equipment",
            "Locker usage",
            "3 free personal training sessions",
            "Access to group classes",
            "Standard health assessment",
            "Extended gym hours access",
            "Free Wi-Fi"
          ]
        },
        {
          id: 3,
          name: "Premium Plan",
          price: 120,
          duration: "6 months",
          features: [
            "Access to gym equipment",
            "Locker usage",
            "6 free personal training sessions",
            "Priority access to group classes",
            "Free nutritional guidance",
            "Complimentary gym towel service",
            "Access to sauna and steam room",
            "1 guest pass per month"
          ]
        },
        {
          id: 4,
          name: "Elite Plan",
          price: 200,
          duration: "12 months",
          features: [
            "Unlimited access to gym equipment",
            "Personal locker",
            "12 personal training sessions",
            "Access to all group classes",
            "Monthly body composition analysis",
            "Custom fitness and diet plan",
            "Priority booking for equipment and classes",
            "Unlimited guest passes",
            "Access to VIP lounge",
            "Free smoothie or protein drink weekly"
          ]
        }
      ];
    return (
        <div className="m-12">
            <h2 className="text-6xl mb-8 text-center">Best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    gymPricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;