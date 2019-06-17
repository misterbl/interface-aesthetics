import React from "react";
import eyelid from "../../assets/eyelid.jpg";

const Complications = () => (
  <React.Fragment>
    <p className="font-weight-bold m-0">
      Complications in Non-Surgical Aesthetics: Blepharoptosis
    </p>
    <p>
      A solid understanding of common and important complications is crucial for
      the safe and effective practice of non-surgical aesthetics. One
      complication often cited with regard to the use of botulinum toxin (Botox
      ®) is a droopy eye, otherwise known as blepharoptosis.
    </p>
    <p>
      Blepharoptosis is a result of the inadvertent paralysis of the muscle
      Levator Palpebrae Superioris. This important muscle does exactly what it
      says, it elevates (Levator) the upper (Superioris) eyelid (Palpebrae).
    </p>
    <div className="text-center mb-5">
      <img src={eyelid} alt="eylid" />
    </div>
    <ul className="orange-dot-li">
      Avoiding this complication is dependent on some important anatomical,
      technical and clinical considerations:
      <li>
        Anatomy – innervation is via sympathetic fibres from the Oculomotor
        nerve. It is crucial to understand how botulinum toxin A (Botox ®)
        works, pre-synaptically at the neuromuscular junction, preventing
        synaptic transmission via Acetyl Choline (ACh). Ensuring that injections
        lateral to the mid-pupillary line are at least 2-3cm superior to the
        supraorbital ridge.
      </li>
      <li>
        Technical – botulinum toxin A can diffuse from the site of injection –
        for this reason ensure a 2-3cm margin from the supra-orbital ridge, in
        order to avoid paralysis of Levator Palpebrae Superioris. In addition,
        inject at a 90-degree angle to the skin to prevent diffusion beyond the
        2cm that is to be expected. Injecting at an angle, particularly pointing
        towards the eye, could result in further diffusion and placement of the
        product inadvertently.
      </li>
      <li>
        Clinical – Patients must be given appropriate instructions following
        treatment which must include the avoidance of bending over or lying flat
        for 3 hours, and of rubbing the face, drinking alcohol and physical
        exertion for at least 24 hours (list not exhaustive). The risk of
        diffusion and paralysis of non-targeted areas will increase if
        post-procedure instructions are not given or not followed.
      </li>
    </ul>
    <p className="mt-5">What are the signs of blepharoptosis?</p>
    <p>
      The patient will most likely report noticing the eye as appearing smaller.
      There will not be visual disturbance unless other muscles have been
      involved (extremely rare). The importance of pre- and post-procedure
      photography is made apparent in any case where a patient reports an issue.
      Ensure further photography is taken and this proves a useful comparison.
      It is not uncommon for patients to notice a pre-existing issue only after
      undergoing a treatment. Treatment may also exacerbate an underlying issue
      (eg: heavy brow). Importantly, there will be no signs associated with more
      sinister pathology (eg: in a Horner’s syndrome).
    </p>
    <p className="mt-5">How do you manage this complication?</p>
    <p>
      Start by reassuring the patient. The effect is temporary and within weeks
      it will start to resolve. There are treatment options to improve the
      patient’s symptoms, which involve stimulation of the Superior Tarsal
      Muscle, which attaches to the Superior Tarsal Plate and also acts to
      elevate the eyelid. Treatment can be with an alpha-adrenoceptor agonist
      such as apraclonidine drops in the affected eye, with treatment under
      supervision of a responsible clinician. Review the patient at regular
      intervals and give a timeframe of expected improvement and resolution.
    </p>
    <p className="mt-5">Medicolegal implications </p>
    <p>
      Always document consent clearly, ensuring all common and important risks
      are discussed with the patient. Photos should be taken in a reproducible
      manner, against a dark plain background and ideally in natural light.
      Malpractice insurance must be obtained and valid in order to practice. A
      practitioner should also be registered with the relevant governing body
      (GMC, GDC, NMC). Remember that the effects of botulinum toxin A are
      temporary. Nevertheless, temporary effects can be distressing for you
      patient and as such it falls to you as the clinician to reassure and
      manage appropriately.
    </p>
  </React.Fragment>
);

export default Complications;
