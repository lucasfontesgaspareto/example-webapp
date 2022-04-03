import Permissions from '../security/permissions';
import config from '../config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
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
  },

  {
    path: '/password-change',
    loader: () =>
      import('../view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
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
  },

  {
    path: '/user/importer',
    loader: () =>
      import('../view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('../view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('../view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('../view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('../view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/security-role',
    loader: () =>
      import('../view/securityRole/list/SecurityRoleListPage'),
    permissionRequired: permissions.securityRoleRead,
    exact: true,
  },
  {
    path: '/security-role/new',
    loader: () =>
      import('../view/securityRole/form/SecurityRoleFormPage'),
    permissionRequired: permissions.securityRoleCreate,
    exact: true,
  },
  {
    path: '/security-role/importer',
    loader: () =>
      import(
        '../view/securityRole/importer/SecurityRoleImporterPage'
      ),
    permissionRequired: permissions.securityRoleImport,
    exact: true,
  },
  {
    path: '/security-role/:id/edit',
    loader: () =>
      import('../view/securityRole/form/SecurityRoleFormPage'),
    permissionRequired: permissions.securityRoleEdit,
    exact: true,
  },
  {
    path: '/security-role/:id',
    loader: () =>
      import('../view/securityRole/view/SecurityRoleViewPage'),
    permissionRequired: permissions.securityRoleRead,
    exact: true,
  },

  {
    path: '/security-permission',
    loader: () =>
      import('../view/securityPermission/list/SecurityPermissionListPage'),
    permissionRequired: permissions.securityPermissionRead,
    exact: true,
  },
  {
    path: '/security-permission/new',
    loader: () =>
      import('../view/securityPermission/form/SecurityPermissionFormPage'),
    permissionRequired: permissions.securityPermissionCreate,
    exact: true,
  },
  {
    path: '/security-permission/importer',
    loader: () =>
      import(
        '../view/securityPermission/importer/SecurityPermissionImporterPage'
      ),
    permissionRequired: permissions.securityPermissionImport,
    exact: true,
  },
  {
    path: '/security-permission/:id/edit',
    loader: () =>
      import('../view/securityPermission/form/SecurityPermissionFormPage'),
    permissionRequired: permissions.securityPermissionEdit,
    exact: true,
  },
  {
    path: '/security-permission/:id',
    loader: () =>
      import('../view/securityPermission/view/SecurityPermissionViewPage'),
    permissionRequired: permissions.securityPermissionRead,
    exact: true,
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
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
