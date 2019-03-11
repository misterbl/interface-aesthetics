import React from "react";
import { withRouter } from "react-router-dom";
import ROUTES from "../const/routes";

export class BecomeAModel extends React.Component {
  render() {
    return (
      <div>
        Model patients are at the core of all Interface courses. As a model, you
        will be assessed and treated by fully qualified healthcare
        professionals, with all procedures carried out under the expert
        supervision and guidance of our trainers. As a model patient, you will
        have the opportunity to undergo the aesthetic treatment(s) of your
        choice with up to a 70% discount on the usual price. Models will go
        through the same rigorous assessment and consent process as all private
        patients. We always require new patients, and we are happy to offer
        ongoing treatments via our courses. Models are required for the
        following: Anti-wrinkle injections (Botox® Bocouture®) From £70 Forehead
        Brow (Frown lines) Eyes (Crows feet, brow lift) Bunny Lines Muscle
        relaxing injections (Botox® Bocouture®) From £70 Neck lines/Nefertiti
        lift Jaw muscles for facial slimming and tooth grinding Gummy smile
        Underarm injections (Botox® Bocouture®) From £100 Excessive sweating
        Dermal Filler (Juverderm® range) From £100 Lip filler Nasolabial (Smile)
        lines Perioral (Smoker’s) lines Marionette lines Jaw contouring
        Under-eye bags (Tear trough) Cheek augmentation
      </div>
    );
  }
}

export default withRouter(BecomeAModel);
