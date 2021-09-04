type RootDrawerNavigation = {
  Loading: undefined;
  Enter: undefined;
  Home: undefined;
  AddPassword: undefined;
  RemovePassword: undefined;
};

type IconName =
  | 'bradesco'
  | 'facebook'
  | 'google'
  | 'instagram'
  | 'inter'
  | 'linkedin'
  | 'nubank'
  | 'paypal'
  | 'spotify'
  | 'twitter'
  | 'visa'
  | 'bancodobrasil'
  | 'magalu'
  | 'mercadolivre'
  | 'clue'
  | 'vsco'
  | 'serasa'
  | 'tiktok'
  | 'carteiradetrabalho'
  | 'carteirademotorista'
  | 'americanas'
  | 'primevideo'
  | 'pinterest'
  | 'mastercard'
  | 'shopee'
  | 'casasbahia'
  | 'netshoes';

type Categories =
  | 'Todos'
  | 'Cartão'
  | 'Site'
  | 'Banco'
  | 'Rede Social'
  | 'Aplicativo'
  | 'Outros';

interface User {
  id: string;
  name: string;
  biometry: boolean;
}

interface Password {
  id: string;
  name: string;
  enter_value: string;
  password_value: string;
  favorite: boolean;
  icon: IconName;
  background: string;
  categorie: Categories;
  created_at: number;
  updated_at: number;
}

interface Categorie {
  id: string;
  name: string;
}
