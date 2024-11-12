export interface BadgeVariants {
  success?: Variant;
  danger?: Variant;
  warning?: Variant;
}

interface Variant {
  backgroundColor: string;
  color: string;
  borderColor: string;
}

export const badgeVariant: BadgeVariants = {
  success: {
    backgroundColor: '#EEF8CF',
    color: '#007E72',
    borderColor: '#EEF8CF',
  },
  danger: {
    backgroundColor: '#FFE2E5',
    color: '#ED3241',
    borderColor: '#FFE2E5',
  },
  warning: {
    backgroundColor: '#FFF4E4',
    color: '#E86339',
    borderColor: '#FFF4E4',
  },
};
