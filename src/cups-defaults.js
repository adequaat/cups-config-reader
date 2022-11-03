// info taken from https://www.cups.org/doc/man-cupsd.conf.html

export default {
    
    // Specifies the logging level for the AccessLog file. The "config" level logs when printers and classes are added, deleted, or modified and when configuration files are accessed or updated. The "actions" level logs when print jobs are submitted, held, released, modified, or canceled, and any of the conditions for "config". The "all" level logs all requests. The default access log level is "actions". 
    AccessLogLevel: 'actions',
    
    // Specifies whether to purge job history data automatically when it is no longer required for quotas. The default is "No". 
    AutoPurgeJobs: 'No',

    // Specifies a list of Bonjour sub-types to advertise for each shared printer. For example, "BrowseDNSSDSubTypes _cups,_print" will tell network clients that both CUPS sharing and IPP Everywhere are supported. The default is "_cups" which is necessary for printer sharing to work between systems using CUPS. 
    BrowseDNSSDSubTypes_subtype: '_cups',

    // Specifies which protocols to use for local printer sharing. The default is "dnssd" on systems that support Bonjour and "none" otherwise. 
    BrowseLocalProtocols: 'none',

    // Specifies whether the CUPS web interface is advertised. The default is "No". 
    BrowseWebIF: 'No',

    // Specifies whether shared printers are advertised. The default is "No". 
    Browsing: 'No',

    //Specifies the default type of authentication to use. The default is "Basic". 
    DefaultAuthType: 'Basic',

    // Specifies whether encryption will be used for authenticated requests. The default is "Required". 
    // DefaultEncryption Never
    // DefaultEncryption IfRequested
    DefaultEncryption: 'Required',

    // Specifies the default language to use for text and web content. The default is "en". 
    DefaultLanguage: 'en',

    // Specifies the default paper size for new print queues. "Auto" uses a locale-specific default, while "None" specifies there is no default paper size. Specific size names are typically "Letter" or "A4". The default is "Auto". 
    DefaultPaperSize: 'Auto',

    // Specifies the default access policy to use. The default access policy is "default". 
    DefaultPolicy: 'default',

    // Specifies whether local printers are shared by default. The default is "Yes". 
    DefaultShared: 'Yes',

    // Specifies the delay for updating of configuration and state files. A value of 0 causes the update to happen as soon as possible, typically within a few milliseconds. The default value is "30". 
    DirtyCleanInterval: "30",

    // Specifies the fully-qualified domain name for the server that is used for Bonjour sharing. The default is typically the server's ".local" hostname. 
    // DNSSDHostName hostname.example.com
    
    // Specifies that a failed print job should be aborted (discarded) unless otherwise specified for the printer. 
    // ErrorPolicy abort-job
    // Specifies that a failed print job should be retried immediately unless otherwise specified for the printer. 
    // ErrorPolicy retry-current-job
    // Specifies that a failed print job should be retried at a later time unless otherwise specified for the printer. 
    // ErrorPolicy retry-job
    // Specifies that a failed print job should stop the printer unless otherwise specified for the printer. The 'stop-printer' error policy is the default. 
    ErrorPolicy: 'stop-printer',

    // Specifies the maximum cost of filters that are run concurrently, which can be used to minimize disk, memory, and CPU resource problems. A limit of 0 disables filter limiting. An average print to a non-PostScript printer needs a filter limit of about 200. A PostScript printer needs about half that (100). Setting the limit below these thresholds will effectively limit the scheduler to printing a single job at any time. The default limit is "0". 
    FilterLimit: "0",
    
    //Specifies the scheduling priority ( nice(8) value) of filters that are run to print a job. The nice value ranges from 0, the highest priority, to 19, the lowest priority. The default is 0. 
    FilterNice: '0',

    // Specifies the service name when using Kerberos authentication. The default service name is "http." 
    GSSServiceName: 'http',

    // Specifies whether to do reverse lookups on connecting clients. The "Double" setting causes cupsd(8) to verify that the hostname resolved from the address matches one of the addresses returned for that hostname. Double lookups also prevent clients with unregistered addresses from connecting to your server. The default is "Off" to avoid the potential server performance problems with hostname lookups. Only set this option to "On" or "Double" if absolutely required. 
    HostNameLookups: 'Off',

    // Specifies the length of time to wait before shutting down due to inactivity. The default is "60" seconds. Note: Only applicable when cupsd(8) is run on-demand (e.g., with -l). 
    IdleExitTimeout: '60',

    // Specifies the number of seconds to wait before killing the filters and backend associated with a canceled or held job. The default is "30". 
    JobKillDelay: '30',

    // Specifies the interval between retries of jobs in seconds. This is typically used for fax queues but can also be used with normal print queues whose error policy is "retry-job" or "retry-current-job". The default is "30". 
    JobRetryInterval: '30',

    // Specifies the number of retries that are done for jobs. This is typically used for fax queues but can also be used with normal print queues whose error policy is "retry-job" or "retry-current-job". The default is "5". 
    JobRetryLimit: '5',

    // Specifies whether to support HTTP keep-alive connections. The default is "Yes". 
    KeepAlive: 'Yes',

    // Specifies how long an idle client connection remains open. The default is "30". 
    KeepAliveTimeout: '30',

    // Specifies the maximum size of print files, IPP requests, and HTML form data. The default is "0" which disables the limit check. 
    LimitRequestBody: '0',

    // Listens to the specified address and port or domain socket path for connections. Multiple Listen directives can be provided to listen on multiple addresses. The Listen directive is similar to the Port directive but allows you to restrict access to specific interfaces or networks. 
    // Listen ipv4-address:port
    // Listen [ipv6-address]:port
    // Listen *:port
    // Listen /path/to/domain/socket

    // Specifies the number of pending connections that will be allowed. This normally only affects very busy servers that have reached the MaxClients limit, but can also be triggered by large numbers of simultaneous connections. When the limit is reached, the operating system will refuse additional connections until the scheduler can accept the pending ones. The default is the OS-defined default limit, typically either "5" for older operating systems or "128" for newer operating systems. 
    ListenBackLog: '128',

    // Specifies the number of debugging messages that are retained for logging if an error occurs in a print job. Debug messages are logged regardless of the LogLevel setting. 
    // LogDebugHistory number

    // Specifies the level of logging for the ErrorLog file. The value "none" stops all logging while "debug2" logs everything. The default is "warn". 
    // LogLevel none
    // LogLevel emerg
    // LogLevel alert
    // LogLevel crit
    // LogLevel error
    // LogLevel notice
    // LogLevel info
    // LogLevel debug
    // LogLevel debug2
    LogLevel: 'warn',

    // Specifies the format of the date and time in the log files. The value "standard" is the default and logs whole seconds while "usecs" logs microseconds. 
    LogTimeFormat: 'standard',

    // Specifies the maximum number of simultaneous clients that are allowed by the scheduler. The default is "100". 
    MaxClients: '100',

    // Specifies the maximum number of simultaneous clients that are allowed from a single address. The default is the MaxClients value. 
    MaxClientsPerHost: '100',

    // Specifies the maximum number of copies that a user can print of each job. The default is "9999". 
    MaxCopies: '9999',

    // Specifies the maximum time a job may remain in the "indefinite" hold state before it is canceled. The default is "0" which disables cancellation of held jobs. 
    MaxHoldTime: "0",

    // Specifies the maximum number of simultaneous jobs that are allowed. Set to "0" to allow an unlimited number of jobs. The default is "500". 
    MaxJobs: '500',

    // Specifies the maximum number of simultaneous jobs that are allowed per printer. The default is "0" which allows up to MaxJobs jobs per printer. 
    MaxJobsPerPrinter: '0',

    // Specifies the maximum number of simultaneous jobs that are allowed per user. The default is "0" which allows up to MaxJobs jobs per user. 
    MaxJobsPerUser: '0',

    // Specifies the maximum time a job may take to print before it is canceled. Set to "0" to disable cancellation of "stuck" jobs. The default is "10800" (3 hours). 
    MaxJobTime: '10800',

    // Specifies the maximum size of the log files before they are rotated. The value "0" disables log rotation. The default is "1048576" (1MB). 
    MaxLogSize: '1048576',

    // Specifies the maximum amount of time to allow between files in a multiple file print job. The default is "900" (15 minutes). 
    MultipleOperationTimeout: '900',


    // Listens to the specified port number for connections. 
    // Port number

    // Specifies whether job files (documents) are preserved after a job is printed. If a numeric value is specified, job files are preserved for the indicated number of seconds after printing. The default is "86400" (preserve 1 day). 
    // PreserveJobFiles Yes
    // PreserveJobFiles No
    PreserveJobFiles: '86400',

    // Specifies whether the job history is preserved after a job is printed. If a numeric value is specified, the job history is preserved for the indicated number of seconds after printing. If "Yes", the job history is preserved until the MaxJobs limit is reached. The default is "Yes". 
    // PreserveJobHistory seconds
    // PreserveJobHistory No
    PreserveJobHistory: 'Yes',

    // Specifies the amount of time to wait for job completion before restarting the scheduler. The default is "30". 
    ReloadTimeout: '30',

    // Specifies the email address of the server administrator. The default value is "root@ServerName". 
    // ServerAdmin email-address

    // The ServerAlias directive is used for HTTP Host header validation when clients connect to the scheduler from external interfaces. Using the special name "*" can expose your system to known browser-based DNS rebinding attacks, even when accessing sites through a firewall. If the auto-discovery of alternate names does not work, we recommend listing each alternate name with a ServerAlias directive instead of using "*". 
    // ServerAlias hostname [ ... hostname ]
    // ServerAlias *

    // Specifies the fully-qualified hostname of the server. The default is the value reported by the hostname(1) command. 
    // ServerName hostname

    // Specifies what information is included in the Server header of HTTP responses. "None" disables the Server header. "ProductOnly" reports "CUPS". "Major" reports "CUPS/major IPP/2". "Minor" reports "CUPS/major.minor IPP/2.1". "Minimal" reports "CUPS/major.minor.patch IPP/2.1". "OS" reports "CUPS/major.minor.path (osname osversion) IPP/2.1". "Full" reports "CUPS/major.minor.path (osname osversion; architecture) IPP/2.1". The default is "Minimal". 
    // ServerTokens None
    // ServerTokens ProductOnly
    // ServerTokens Major
    // ServerTokens Minor
    // ServerTokens OS
    // ServerTokens Full
    ServerTokens: 'Minimal',

    // Listens on the specified address and port for encrypted connections. 
    // SSLListen ipv4-address:port
    // SSLListen [ipv6-address]:port
    // SSLListen *:port

    // Sets encryption options (only in /etc/cups/client.conf). By default, CUPS only supports encryption using TLS v1.0 or higher using known secure cipher suites. Security is reduced when Allow options are used. Security is enhanced when Deny options are used. The AllowDH option enables cipher suites using plain Diffie-Hellman key negotiation (not supported on systems using GNU TLS). The AllowRC4 option enables the 128-bit RC4 cipher suites, which are required for some older clients. The AllowSSL3 option enables SSL v3.0, which is required for some older clients that do not support TLS v1.0. The DenyCBC option disables all CBC cipher suites. The DenyTLS1.0 option disables TLS v1.0 support - this sets the minimum protocol version to TLS v1.1. The MinTLS options set the minimum TLS version to support. The MaxTLS options set the maximum TLS version to support. Not all operating systems support TLS 1.3 at this time. 
    // SSLOptions [AllowDH] [AllowRC4] [AllowSSL3] [DenyCBC] [DenyTLS1.0] [MaxTLS1.0] [MaxTLS1.1] [MaxTLS1.2] [MaxTLS1.3] [MinTLS1.0] [MinTLS1.1] [MinTLS1.2] [MinTLS1.3]
    // SSLOptions None

    // Listens on the specified port for encrypted connections. 
    // SSLPort port
    
    // Specifies whether the scheduler requires clients to strictly adhere to the IPP specifications. The default is "No". 
    StrictConformance: 'No',

    // Specifies the HTTP request timeout. The default is "900" (15 minutes). 
    Timeout: '900',

    // Specifies whether the web interface is enabled. The default is "No". 
    WebInterface: 'no'
};