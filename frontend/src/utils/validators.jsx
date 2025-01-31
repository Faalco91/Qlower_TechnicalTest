export const validateTransaction = (date, montant) => {
    if (!date || isNaN(new Date(date))) return "La date est invalide.";
    if (isNaN(montant) || montant === '') return "Le montant doit être un nombre valide.";
    return '';
  };
  