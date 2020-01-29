type LinkProperty = any
type AtomicProperty = any
type ColumnReferenceProperty = any
type NaturalLanguageProperties = any
type UriTemplateProperties = any

type TableDirection = "rtl" | "ltr" | "auto"

interface TopLevelProperties {
    "@base": string
    "language": string
}

interface TableGroup {
    tables: Table[]
    dialect?: DialectDescription
    notes?: any[] //TODO
    tableDirection?: TableDirection
    tableSchema?: Schema
    transformations?: TransformationDefinition
    "@id"?: LinkProperty
    "@type"?: AtomicProperty
}

interface Table extends InheritedProperties{
    url: LinkProperty
    dialect?: DialectDescription
    notes?: any[] //TODO
    suppressOutpu?: boolean
    tableDirection?: TableDirection
    tableSchema?: Schema
}

interface Schema extends InheritedProperties{
    columns?: ColumnDescription[]
    foreignKeys?: ForeignKeyDefinitions[]
    primaryKey?: ColumnReferenceProperty
    rowTitles?: ColumnReferenceProperty
    "@id"?: LinkProperty
    "@type"?: AtomicProperty
}

interface ColumnDescription extends InheritedProperties {
    name?: AtomicProperty,
    titles?: AtomicProperty,
    virtual?: AtomicProperty,
    note?: AtomicProperty,
    "@id"?: AtomicProperty,
    "@type"?: AtomicProperty
}

interface InheritedProperties {
    aboutUrl?: UriTemplateProperties,
    datatype?: AtomicProperty,
    default?: AtomicProperty,
    lang?: AtomicProperty,
    null?: AtomicProperty,
    ordered?: AtomicProperty,
    propertyUrl?: UriTemplateProperties,
    required?: AtomicProperty,
    separator?: AtomicProperty,
    textDirection?: AtomicProperty,
    valueUrl?: UriTemplateProperties,
}

interface DialectDescription {
    commentPrefix: AtomicProperty
    delimiter: AtomicProperty
    doubleQuote: AtomicProperty
    encoding: AtomicProperty
    header: AtomicProperty
    headerRowCount: AtomicProperty
    lineTerminators: AtomicProperty[]
    quoteChar: AtomicProperty
    skipBlankRows: AtomicProperty
    skipColumns: AtomicProperty
    skipInitialSpace: AtomicProperty
    skipRows: AtomicProperty
    trim: AtomicProperty
    "@id": LinkProperty
    "@type": AtomicProperty
}

interface TransformationDefinition {
    url: LinkProperty,
    scriptFormat: LinkProperty,
    targetFormat: LinkProperty,
    source?: string,
    titles?: NaturalLanguageProperties,
    "@id"?: LinkProperty,
    "@type"?: AtomicProperty
}

interface DatatypeDescription {
    base?: AtomicProperty,
    format?: AtomicProperty,
    length?: AtomicProperty,
    minLength?: AtomicProperty,
    maxLength?: AtomicProperty,
    minimum?: AtomicProperty,
    maximum?: AtomicProperty,
    minInclusive?: AtomicProperty,
    maxInclusive?: AtomicProperty,
    minExclusive?: AtomicProperty,
    maxExclusive?: AtomicProperty,
    "@id"?: AtomicProperty,
    "@type"?: AtomicProperty
}

interface NumberFormat {}

interface ForeignKeyDefinitions {
    columnReference: ColumnReferenceProperty
    reference: {
        resource: LinkProperty
        schemaReference: LinkProperty
        columnReference: ColumnReferenceProperty
    }
}

