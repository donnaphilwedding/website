import { Responses } from "../../utils/rsvp.types";

export interface FormCardProps {
  responses: Responses,
  setResponses: (res: Responses) => void,
  onBack: () => void,
  onComplete: () => void
}