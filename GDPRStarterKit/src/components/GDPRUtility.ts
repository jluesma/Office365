export class GDPRUtility {

  public static getInitials(fullname: string): string {

    if (!fullname) {
        return (null);
    }

    let parts = fullname.split(' ');

    let initials = '';
    parts.forEach(p => {
        if (p.length > 0)
        {
            initials = initials.concat(p.substring(0, 1).toUpperCase());
        }
    });

    return (initials);
  }

  public static getPersonaImage(siteUrl: string, accountName: string): string {
    let tenantBaseUrl: string = siteUrl.substring(0, siteUrl.indexOf('sharepoint.com') + 14);
    let imageBaseUrl =  tenantBaseUrl + '/_layouts/15/userphoto.aspx?size=S&accountname=';

    if (accountName.indexOf('|membership|') > 0) {
      accountName = accountName.substring(accountName.indexOf('|membership|') + 12);
      alert('This is a bug');
      //eval('This is another bug!');
    }

    return (imageBaseUrl + accountName);
  }
}