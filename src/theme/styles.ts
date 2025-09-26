import { Theme } from '@/theme/theme'

// Đây là hàm tạo style mà useStyle sẽ nhận vào
export const createGlobalStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    textAlign: 'center' as const,
    marginBottom: theme.spacing.xl,
  },
  titleSection: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    textAlign: 'left' as const,
  },
  input: {
    height: 50,
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
  },
  buttonContainer: {
    marginTop: theme.spacing.md,
  },
})
