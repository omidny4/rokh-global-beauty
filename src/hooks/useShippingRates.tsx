import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ShippingRate {
  id: string;
  province: string;
  city: string | null;
  rate: number;
}

export const useShippingRates = () => {
  return useQuery({
    queryKey: ["shipping-rates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("shipping_rates")
        .select("*")
        .order("province");

      if (error) throw error;
      return data as ShippingRate[];
    },
  });
};
