import Permissions from '../security/permissions';
import config from '../config';
import { i18n } from '../i18n';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('../view/layout/Tabs'),
    permissionRequired: null,
    exact: true,
  },

].filter(Boolean);

const privateRoutesTabs = [
  {
    path: '/dashboard',
    loader: () =>
      import('../view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('../view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    label: i18n('auth.profile.title'),
  },

  {
    path: '/password-change',
    loader: () =>
      import('../view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
    label: i18n('auth.passwordChange.title'),
  },

  {
    path: '/tenant',
    loader: () =>
      import('../view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('../view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('../view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('../view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('../view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('../view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
    label: i18n('user.new.title'),
  },

  {
    path: '/user/importer',
    loader: () =>
      import('../view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
    label: i18n('user.importer.title'),
  },
  {
    path: '/user/:id/edit',
    loader: () => import('../view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
    label: i18n('user.edit.title'),
  },
  {
    path: '/user/:id',
    loader: () => import('../view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
    label: i18n('user.view.title'),
  },

  {
    path: '/audit-logs',
    loader: () => import('../view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
    label: i18n('auditLog.menu'),
  },

  {
    path: '/settings',
    loader: () =>
      import('../view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('../view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('../view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('../view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('../view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('../view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('../view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('../view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('../view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('../view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('../view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('../view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('../view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  privateRoutesTabs,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
