import { TicketCard } from "../../../../components/TicketCard/TicketCard";

const checkPropExists = (prop) => (prop?.length > 0 ? true : false);

export const TicketCards = ({ tickets }) => {
  const ticketCardElements = tickets.map(
    ({ id, title, tags, description, comments }) => {
      const cardProps = {
        title,
        tags,
        isComments: checkPropExists(comments),
        isDescription: checkPropExists(description),
        key: id,
        id,
      };

      return <TicketCard {...cardProps} />;
    }
  );

  return <>{ticketCardElements}</>;
};
