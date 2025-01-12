import React, { useEffect, useState } from "react";
import ServicePage from "./ServicePage";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "@/handlers/servicesHandlers";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null); // Directly manage service instead of services array
  const navigate = useNavigate();
  const clickHandler = async () => {
    navigate(`/bookings/${service._id}`);
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await getService(id);
        if (res?.data?.service) {
          setService(res.data.service); // Simplified response handling
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchService();
  }, [id]);

  return (
    <section>
      {service ? (
        <ServicePage service={service} clickHandler={clickHandler} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
