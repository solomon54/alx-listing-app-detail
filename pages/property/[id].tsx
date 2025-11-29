import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDeatil";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage(){
    const router = useRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);
    if (!property) return <p> Property not found</p>

    return (
        <div>
            <PropertyDetail property={property} />
            <ReviewSection reviews={property.reviews }/>
            <BookingSection price={property.price}/>
            
        </div>
    )
}