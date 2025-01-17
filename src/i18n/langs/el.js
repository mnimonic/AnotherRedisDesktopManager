const el = {
  message: {
    new_connection: 'Νεα Σύνδεση',
    refresh_connection: 'Ανανέωση',
    edit_connection: 'Διόρθωση Σύνδεσης',
    del_connection: 'Διαγραφή Σύνδεσης',
    close_connection: 'Αποσύνδεση',
    add_new_line: 'Νέα Γραμμή',
    redis_version: 'Έκδοση Redis',
    process_id: 'Process ID',
    used_memory: 'Χρήση Μνήμης',
    used_memory_peak: 'Μέγιστη Χρήση Μνήμης',
    used_memory_lua: 'Χρήση Μνήμης Lua',
    connected_clients: 'Συνδεμένοι Πελάτες',
    total_connections_received: 'Συνολικός αριθμός Συνδέσεων',
    total_commands_processed: 'Συνολικός αριθμός Εντολών',
    key_statistics: 'Σημαντικά Στατιστικά',
    all_redis_info: 'Πληροφορίες της Redis',
    server: 'Διακομιστής',
    memory: 'Μνήμη',
    stats: 'Στατιστικά',
    settings: 'Ρυθμίσεις',
    confirm_to_delete_row_data: 'Ολοκλήρωση διαγραφής;',
    delete_success: 'Επιτυχής Διαγραφή',
    delete_failed: 'Αποτυχία Διαγραφής',
    modify_success: 'Modify Success',
    modify_failed: 'Modify Failed',
    add_success: 'Επιτυχής Προσθήκη',
    add_failed: 'Η Προσθήκη Απέτυχε',
    value_exists: 'Η τιμή υπάρχει ήδη',
    refresh_success: 'Επιτυχής Ανανέωση',
    click_enter_to_rename: 'Κάντε Click ή Πιεστε Enter για Μετονομασία',
    click_enter_to_ttl: 'Κάντε Click ή Πιεστε Enter για να αλλάξετε το TTL',
    confirm_to_delete_key: 'Ολοκλήρωση διαγραφής του κλειδίου: {key} ;',
    confirm_to_rename_key: 'Ολοκλήρωση Μετονομασίας του {old} σε {new} ;',
    edit_line: 'Διόρθωση Γραμμής',
    auto_refresh: 'Αυτόματη Αναννέωση',
    auto_refresh_tip: 'Auto Refresh Switch, Refresh Every {interval} Seconds',
    key_not_exists: 'Το κλειδί δεν υπάρχει',
    collapse_all: 'Σύμπτυξη όλων',
    expand_all: 'Ανάπτυξη όλων',
    json_format_failed: 'Αποτυχία αναγνώρισης Json',
    msgpack_format_failed: 'Αποτυχία αναγνώρισης Msgpack',
    php_unserialize_format_failed: 'Αποτυχία σε PHP Unserialize',
    clean_up: 'Καθαρισμός',
    redis_console: 'Κοσνόλα Redis',
    confirm_to_delete_connection: 'Confirm To Delete Connection ?',
    connection_exists: 'Connection Config Already Exists',
    close_to_edit_connection: 'You Must Close The Connection Before Editing',
    close_to_connection: 'Confirm To Close Connection ?',
    ttl_delete: 'Set TTL<=0 Will Delete The Key Directly',
    max_page_reached: 'Φτάσατε στην Τελευταία Σελίδα',
    add_new_key: 'Νέο Κλειδί',
    enter_new_key: 'Εισάγετε Πρώτα Το Νέο Όνομα Κλειδιού',
    key_type: 'Τύπος Κλειδιού',
    save: 'Αποθήκευση',
    enter_to_search: 'Αναζήτηση',
    export_success: 'Επιτυχής Εξαγωγή',
    select_import_file: 'Επιλογή αρχείου',
    import_success: 'Επιτυχής Εισαγωγή',
    put_file_here: 'Drag File Here Or Click To Select',
    config_connections: 'Συνδέσεις',
    import: 'Εισαγωγή',
    export: 'Εξαγωγή',
    open: 'Άνοιγμα',
    close: 'Κλείσιμο',
    open_new_tab: 'Open In New Tab',
    exact_search: 'Ακριβής Αναζήτηση',
    enter_to_exec: 'Press Enter To Exec Commands, Up and Down To Switch History',
    pre_version: 'Έκδοση',
    manual_update: 'Χειροκίνητη Μεταφόρτωση',
    retry_too_many_times: 'Too Many Attempts To Reconnect. Please Check The Server Status',
    key_to_search: 'Αναζήτηση Λέξης-Κλειδί',
    begin_update: 'Αναβάθμιση',
    ignore_this_version: 'Αγνόηση της Συγκεκριμένης Έκδοσης',
    check_update: 'Έλεχγος για αναβάθμιση',
    update_checking: 'Αναζήτηση Αναβάθμισης, Παρακαλώ Περιμένετε...',
    update_available: 'Βρέθηκε νεα Έκδοση',
    update_not_available: 'Δεν Υπάρχει Νεότερη Έκδοση',
    update_error: 'Η Αναβάθμιση Απέτυχε',
    update_downloading: 'Μεταφόρτωση...',
    update_download_progress: 'Διαδικασία Μεταφόρτωσης',
    update_downloaded: 'Update Download Completed, Restart Your App Please.\
    [Tips]: If you are using Windows, after closing the app, waiting the desktop icon to refresh to a normal state(about 10 seconds), and then you can reopen it',
    mac_not_support_auto_update: 'Mac Does Not Support Automatic Update, Please Manually <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">Download</a> And Reinstall,\
    Or Run "brew reinstall --cask another-redis-desktop-manager"\
    <br><br>🧡if it\'s useful to you ,you can sponsor through <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, and AppStore will automatically update it for you.',
    font_family: 'Γραμματοσειρά',
    font_faq_title: 'Οδηγίες Ρυθμίσεων Γραμματοσειράς',
    font_faq: '1. Πολλαπλές γραμματοσειρές μπορούν να επιλεγούν<br>\
    2. Font selection is orderly. It is suggested to choose English font first and then font in your language<br>\
    3. When the system font list cannot be loaded in some exceptional cases, you can enter the installed font name manually.',
    private_key_faq: 'Ο τύπος RSA ιδιωτικού κλειδιού υποστηρίζεται, ο οποίος ξεκινάει με <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    άν ξεκινάει με <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre> θα χρειαστεί να το μετατρέψετε με την ακόλουθη εντολή <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre> Η εντολή δεν θα επηρεάσει το αρχικό ιδιοτικό κλειδί σύνδεσης',
    dark_mode: 'Σκούρο Θέμα',
    load_more_keys: 'Περισσότερα αποτελέσματα',
    key_name: 'Όνομα Κλειδιού',
    project_home: 'Αρχική',
    cluster_faq: 'Select any node in the cluster to fill in, and other nodes will be identified automatically.',
    redis_status: 'Πληροφορίες για την Redis',
    confirm_flush_db: 'Confirm to delete all the keys in db{db} ?',
    flushdb: 'Flush DB (Αδειασμα Βάσης)',
    flushdb_prompt: 'Πληκτρολογίστε "{txt}"',
    info_disabled: 'Info command execution exception(may have been disabled), redis info cannot be displayed',
    page_zoom: 'Μεγένθυση Σελίδας',
    scan_disabled: 'Πρόβλημα Στην Εντολή Σάρωσης (Μπορεί να ειναι απενεργοποιημένη), Η λίστα των κλειδίων δεν μπορεί να εμφανιστεί',
    key_type_not_support: 'Visual display is not supported for this type. Please use console',
    delete_folder: 'Σάρωση και Διαγραφή Ολόκληρου του Φακέλου',
    multiple_select: 'Πολλαπλή Επιλογή',
    copy: 'Αντιγραφή',
    copy_success: 'Επιτυχία Αντιγραφής',
    keys_to_be_deleted: 'Κλειδία προς Διαγραφή',
    delete_all: 'Διαγραφή Όλων',
    clear_cache: 'Καθαρισμός Cache',
    mark_color: 'Διακριτικό Χρώμα',
    key_no_permission: 'File read permission has expired, please reselect the key file manually',
    toggle_check_all: 'Επιλογή Όλων | Αποεπιλογή Όλων',
    select_lang: 'Επιλογή Γλώσσας',
    clear_cache_tip: 'When there is a problem with the client, this operation will delete all the connections and configurations to recover the client',
    detail: 'Detail',
    separator_tip: 'The separator of the tree view, set to empty to disable tree and display keys as list',
    confirm_modify_unvisible_content: 'The content contains invisible characters, you can edit safely in the "Hex View". If continuing to edit in the "Text View" may cause coding errors, sure to continue?',
    keys_per_loading: 'Αριθμός Φορτωμένων Κλειδιών',
    keys_per_loading_tip: 'Αριθμός Κλειδιών Ανα Φόρτωση. Ορίζοντας μεγάλο αριθμό κλειδιών μπορεί να επηρεάσει την ταχύτητα',
    host: 'Διεύθυνση Διακομιστή',
    port: 'Πόρτα',
    username: 'Ονομα Χρήστη',
    password: 'Μυστικός Κωδικός',
    connection_name: 'Όνομα Σύνδεσης',
    separator: 'Διαχωριστικό',
    timeout: 'Timeout',
    private_key: 'Private Key',
    public_key: 'Public Key',
    authority: 'Authority',
    redis_node_password: 'Redis Node Password',
    master_group_name: 'Master Group Name',
    command_log: 'Log',
    sentinel_faq: 'Μπορείτε να επιλέξετε πολλαπλούς Redis Sentinels. Παρακαλώ προσθέστε τις ρυθμίσεις διεύθυνση, πόρτα και κωδικό. Ο κωδικός που θα χρησιμοποιήσετε είναι ο κωδικός σύνδεσης στην Master Redis που ελέγχεται από το Redis Sentinel.',
    hotkey: 'Hot Key',
    persist: 'Remove Expire Time',
    custom_formatter: 'Προσαρμοσμένη Μορφοποίηση',
    edit: 'Διόρθωση',
    new: 'Νέο',
    custom: 'Προσαρμοσμένο',
    hide_window: 'Απόκρυψη Παραθύρου',
    minimize_window: 'Ελαχιστοποίηση Παραθύρου',
    maximize_window: 'Μεγιστοποιηση Παραθύρου',
    unserialize: 'Unserialize',
  },
};

export default el;
